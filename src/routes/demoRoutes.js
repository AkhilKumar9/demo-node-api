import {addNewContact,updateContact,getContacts,getContactWithId,deleteContact}
 from '../../src/controllers/demoController.js';

const Routes = (app) =>
{
    app.route('/contact')
    .get((req,res,next)=>
    {
console.log(`${req.originalUrl}`)
console.log(`${req.method}`)
            next()
    },getContacts   )

    .post(addNewContact);
    

    app.route('/contact/:contactID')
    .get(getContactWithId)

    .put(updateContact)

    .delete(deleteContact)

     
}

export default Routes;  