
$(document).ready(function() {
		    $('#contactForm').bootstrapValidator({
		        /*container: '#messages',*/
		        feedbackIcons: {
		            valid: 'glyphicon glyphicon-ok',
		            invalid: 'glyphicon glyphicon-remove',
		            validating: 'glyphicon glyphicon-refresh'
		        },

		        fields: {
		            is_char: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter this field'
		                    },
		                    /*fName:{
		                    	message:'First name must contain characters min 3 and max 10'
		                    },*/
		                    regexp: {
		                        regexp: /^[a-zA-Z]{3,10}$/,
		                        message: 'This field allows only characters with min 3 and max 10 characters'
                    		}
		                }
		            },
		            /*'is_char[0]':{
		            	validators: {
		            		notEmpty: {
		            			message: 'Please Enter First Name'
		            		},
		            		regexp:{
		            			message: 'The First Name allows only characters with min 3 and max 10 characters'
		            		}
		            	}
		            }*/

		           /* ========*/
		           /*lastName: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Last Name'
		                    },
		                    regexp: {
		                        regexp: /^[a-zA-Z]{3,10}$/,
		                        message: 'The Last name allows only characters with min 3 and max 10 characters'
                    		}
		                }
		            },*/
		            is_gender: {
		                validators: {
		                    notEmpty: {
		                        message: 'The gender is required'
		                    }
		                }
		            },
		           /* =========*/
		            is_email: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Email'
		                    },
		                    emailAddress: {
		                        message: ' '
		                    },
		                    regexp: {
		                        regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/,
		                        message: 'The email can only consist of alphabetical, number, dot and underscore @ symbols ex: abc@abc.com'
                    		}
		                }
		            },
		           /* pass: {
		                validators: {
		                    notEmpty: {
		                        message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
		                    },
		                    password: {
		                        message: 'The Password is not valid'
		                    }
		                }
		            },*/
		            is_password: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Password'
		                    },
		                    
		                    regexp: {
	                        regexp:  /^(?=.*[!@#$%^&*()_+])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,12}$/,
	                        message: 'Must contain at least one Upper case letter, one Lower case letter, one number and a special character [!@#$%^&*()_+] limit [8-12]'
                    		}
                    		/*,identical: {
		                        field: 'confirmPassword',
		                        message: 'Dont worry about this error if u enter confirmPassword same as password it shows success'
		                    },*/
		                    /*different: {
		                        field: 'username',
		                        message: 'The password cannot be the same as username'
		                    },*/     
                    		
		                }
		            },
		            is_confirmPassword: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter ConfirmPassword same as password'
		                    },
		                    identical: {
		                        field: 'is_password',
		                        message: 'The password and its confirm are not the same'
		                    },
		                    /*different: {
		                        field: 'username',
		                        message: 'The password cannot be the same as username'
		                    }*/
		                }
		            },

		            is_num: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Phone Number'
		                    },
		                    regexp: {
	                        regexp: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
	                        message: 'The phone number format like +91 (123) 456-7890'
                    		}
		                }
		            }, //pattern="^[6789][0-9]{9}$"

		             is_char_digit: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter this field'
		                    },
		                    stringLength: {
		                    	min: 5,
		                        max: 50,
		                        message: 'this field can only contain alphabetical, digits, dot and underscore with limit[5-50]'
		                    },
		                    regexp: {
		                    	regexp: /^[a-zA-Z0-9_\.]+$/
		                    	//message: 'this field can only contain alphabetical, digits, dot and underscore'
		                    }
		                }
		            },
		            is_language: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please specify at least one language you can speak and english is must'
		                    }
		                }
		            }

		            /*, title: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Title'
		                    },
		                    stringLength: {
		                        max: 50,
		                        message: 'The title must be less than 50 characters long'
		                    }
		                }
		            },
		            content: {
		                validators: {
		                    notEmpty: {
		                        message: 'Please Enter Content'
		                    },
		                    stringLength: {
		                        max: 100,
		                        message: 'The content must be less than 100 characters long'
		                    }
		                }
		            }*/
		        }
		    });
		});