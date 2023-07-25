import ErrorHandler from "../utils/errorhandler.js";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongodb ID error

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400)
  }

  // Wrong JWT error
  if(err.name === "JsonWebTokenError"){
    const message = `Json Web Token is Invalid, try Again`;
    err = new ErrorHandler(message, 400)
  }

   
  //JWT EXPIRE error
  if(err.name === "TokenExpiredError"){
    const message = `Json Web Token is Expire, try Again`;
    err = new ErrorHandler(message, 400)
  }

  SyntaxError

    
  //Json data has invalid format
  if(err.name === "SyntaxError"){
    const message = `Json format is Invalid, try Again`;
    err = new ErrorHandler(message, 400)
  }



 //ValidationError error
 if(err.name === "ValidationError"){
  const message = `ValidationError error, try Again`;
  err = new ErrorHandler(message, 400) 
}

 //JsonWebTokenError error
 if(err.name === "JsonWebTokenError"){
  const message = `JsonWebTokenError error" May me the token store in the browser is delete from database, try Again`;
  err = new ErrorHandler(message, 400) 
}

//TypeError error
if(err.name === "TypeError"){
  const message = `TypeError error, try Again`;
  err = new ErrorHandler(message, 400) 
}
  res.status(err.statusCode).json({
    success: false,
    // error:err, // for only error
    // error:err.stack // this line is for full detail of the error
    // message:err.stack // to show error stack
    message: err.message, // to show only message
  });
};
