const inputs=document.querySelectorAll('.form-group .form-control');
// console.log(inputs);
function handleUpdates() {
const  suffix=this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}


inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mouseover', handleUpdates));