const contactTemplate = ({ name, email, description }) => `
  <html>
  <head></head>
  <body>
<h3>you have a new contact from ${name}.</h3>
      
<p>${description}</p>
<hr/>  
<p>To contact response to this email ${email}</p>
       
      
  </body>
  </html>
    `;
module.exports = { contactTemplate };
