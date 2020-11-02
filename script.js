form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
	e.preventDefault()
	principal = Number(e.target.principal.value)
	rate = Number(e.target.rate.value)
	tenure = Number(e.target.tenure.value)
	r = rate/1200
	numerator = r * Math.pow((1+r),tenure)
	denomenator = Math.pow((1+r),tenure) - 1
	emi = (principal *(numerator/denomenator))
	total_interest = (emi * tenure ) - principal
	total_amount_payable = principal + total_interest
	
	emi_doc = document.getElementById('emi')
	total_interest_doc = document.getElementById('interest')
	amount_doc = document.getElementById('amount')

	
	emi_doc.innerText = Math.round(emi)
	total_interest_doc.innerText = Math.round(total_interest)
	amount_doc.innerText = Math.round(total_amount_payable)

})