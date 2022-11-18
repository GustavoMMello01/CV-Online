window.onload = function () {
    var night_icon = document.getElementById("night");

    night_icon.onclick = function(){
        document.body.classList.toggle("dark-theme") 
    }

    let areaCv = document.getElementById("area-cv")
    let resumeButton = document.getElementById("export-pdf")

    let opt = {
        margin:       0,
        filename:     'Gustavo_Mello_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

    function generateResume(){
        html2pdf(areaCv, opt)
    }

    resumeButton.addEventListener('click', ()=> {
        scaleCv()
        generateResume()
    })

}