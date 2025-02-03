import Joi from 'joi'


//schema

/*const schema = Joi.object(
    {
        name:Joi.string().min(4).required(),
        age:Joi.number().integer().min(18).required()
    }
)

const data ={name:'John',age:6}

//error handling
const {error} = schema.validate(data)
//if(error) {console.log(error.details[0].message)}
*/
//custom  messages
const schema = Joi.object({
    username:Joi.string().min(3).required().messages({
        'string.min': 'username must be at least 3 characters long',
        'any.required': 'username is required bitch'
    })
})

//const {error}= schema.validate({});

//console.log(error.details[0].message)

//array validation
// const array = ['apple','banna']

// const arraySchema = Joi.array().items(Joi.string().valid('apple','banana'));

// console.log(arraySchema.validate(array).error)


//nested validation
let userSchema = Joi.object({
    profile:Joi.object({
        firstname:Joi.string().max(4).min(1).required(),
    //conditional validation
       lastname: Joi.string().valid(Joi.ref('firstname')).required()
    }),

    skills:Joi.object({
        frontend:Joi.boolean().required().messages({
            'any.required' : 'database cant analyse your frontend skills they must be boolean'
            ,'Joi.boolean' : 'data-type should be a boolean (true/false)'
        }),
        backend:Joi.boolean().required().messages({
            'any.required': 'the database cant analyse oyur backend skills it must be a boolean to proceed'
            ,'Joi.boolean': 'data-type should be a boolean (true/false)'

        })
    })
})

//custom validation logic
const customSchema = Joi.string().custom((value,helpers)=>{
     if(value !== 'Rose'){
        return helpers.error('Bro am confused coz i loved her like damn nigga')
     }
     return value;
},'i misss rose')

let userData ={

    profile:{
    firstname:'deno',
    lastname:'njor',
  }, 
  skills:{
    frontend:true,
    backend:false,
  }

}

// let {error,value} = userSchema.validate(userData)

// if(error){
//     console.log(error.details.map(err=>err.message))
    

// }else{
//     console.log(value)
// }

// scheme combosition (combining schemas)
//--consitional validation


const conditional = Joi.object({
    role: Joi.string().valid('admin', 'user').required(),
    accesscode: Joi.when('role', {
        is: 'admin',
        then: Joi.string().required(),
        otherwise: Joi.forbidden(),
    }),
    usercode: Joi.when('role', {
        is: 'user',
        then: Joi.number().integer().min(4).required(),
        otherwise: Joi.forbidden(),
    }),
});

const validAdmin = { role: 'admin', accesscode: 'secret123' };
const invalidAdmin = { role: 'admin' };
const validUser = { role: 'user' };

const { error: error1, value :value1 } = conditional.validate(validUser);

if (error1) { 
    console.log(error1.details[0].message);
} else {
    console.log(value1);
}

