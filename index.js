const goodbye = (jmeno) => {
    const uzaver = document.querySelector(".email__closing")
    uzaver.textContent = `Na shledanou ${jmeno}`

}
const funkce = goodbye(`Pavel Ovesný`)

