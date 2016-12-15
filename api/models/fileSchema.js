var mongoose = require('mongoose');

var schema = mongoose.Schema;

var FileSchema = new schema({
	date: {
		type: Date,
		required: 'Date not Found'
	},
	category: {
		type: String,
		required: 'Category not Found'
	},
	employeeName: {
		type: String,
		required: 'Employee name not Found'
	},
	employeeAddress: {
		type: String,
		required: 'Employee address not Found'
	},
	expenseDescription: {
		type: String,
		required: 'Expense description not Found'
	},
	preTax: {
		type: Number,
		required: 'Pre-tax not Found'
	},
	preTaxAmount: {
		type: Number,
		required: 'Pre-tax amount not Found'
	},
	taxName: {
		type: String,
		required: 'Tax name not Found'
	},
	taxAmount: {
		type: Number,
		required: 'Tax Amout not Found'
	}
})

module.exports = mongoose.model('File', FileSchema);