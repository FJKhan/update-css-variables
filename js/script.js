const inputs = document.querySelectorAll('.controls input')
inputs.forEach(input => input.addEventListener('change', handleChanges))
inputs.forEach(input => input.addEventListener('mousemove', handleChanges));

function handleChanges() {
    const measurement = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${measurement}`)
}

