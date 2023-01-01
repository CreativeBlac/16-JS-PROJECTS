const linkEl = document.querySelector("a");
linkEl.addEventListener("click", () => {
    const names = prompt('Enter Your Name Please')
    const msg = `Hey ${names} Return To This Page When You Are Done.`
    alert(msg);
});
