export function customMiddleware(req, res, next) {
    console.log('Middleware ejecutado');
    next();
  }
  