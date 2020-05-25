import mongoose from 'mongoose';
import {ContactSchema} from '../../src/models/demoModel.js';

const Contact=mongoose.model('Contact',ContactSchema);

export const addNewContact= (req,res)=>{
let newContact= Contact(req.body);
newContact.save((err,contact)=>{
    if (err)
    {
        res.send(err);
    }
    res.json(contact);
})
}

export const getContactWithId= (req,res)=>{
    Contact.findById(req.params.contactID ,(err,contact)=>{
        if (err)
        {
            res.send(err);
        }
        res.json(contact);
    })
    }

    export const getContacts= (req,res)=>{
        Contact.find({},(err,contact)=>{
            if (err)
            {
                res.send(err);
            }
            res.json(contact);
        })
        }

        export const updateContact= (req,res)=>{
            Contact.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true,useFindandModify:false},(err,contact)=>{
                if (err)
                {
                    res.send(err);
                }
                res.json(contact);
            })
            }

            export const deleteContact= (req,res)=>{
                Contact.findOneAndRemove({_id:req.params.contactID},(err,contact)=>{
                    if (err)
                    {
                        res.send(err);
                    }
                    res.json({message:'success deleting'});
                })
                }
    
