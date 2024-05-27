const logger = (req,res,next)=>{
    const timestamp = new Date().toLocaleString()
    console.log(`[${timestamp}] Request made to: [method -> ${req.method}] [url -> ${req.url}] `);
      next()
}

module.exports = logger