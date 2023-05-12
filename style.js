const textarea = document.querySelector('.text-area');

const initialHeight = parseInt(getComputedStyle (textarea).getPropertyValue('height'));

textarea.addEventListener("input", () =>{
    textarea.style.height = `${initialHeight}px`;
    const newHeight = textarea.scrollHeight - initialHeight;
    textarea.style.height = `${newHeight}px`;
});