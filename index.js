const names = ["Juan Borja","Jesus Medrano","Jose Alvarino","Nicolle Vergara","Sebastian Beleño"]

const randomNumber = (min,max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min
  return result
}

const spamWom = async (phoneNumber) => {

  const payload = {"visitId":"67da0dea-5571-4ed6-89f3-d0d6e4ad313b","contentUrl":"https://planeswom.co/p/portabilidad-wom/planes-pospago.html?gad_source=1","contentType":"LandingPage","contentId":"WOM_CO_09_M_PORTABILIDAD","templateId":"WOM_SITE_Colombia","sourceId":"portabilidad-wom","campaignId":"WOM_CO_09_M_PORTABILIDAD","thankyouPageUrl":"https://planeswom.co/t/p/portabilidad-wom/c2c","formId":"form_c2c_0","buttonId":"form_c2c_0_0","contactData":{"trackingId":"63506ea0-ea30-41b4-8271-225570dd393d","firstname":names[randomNumber(0,4)],"phone":phoneNumber},"contactFiles":[]}

  const response = await fetch('https://planeswom.co/public/c2c/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json()

  if (data.status === true){
    console.log('WOM SPAM DONE')
  }
  else{
    console.error('WOM SPAM FAILED')
  }

}

const spamClaro = async (phoneNumber) => { 
  const payload = {"visitId":"8804145e-a622-4ccd-a842-9f2a37f1d298","contentUrl":"https://claro-promociones.co/p/claro-top-kw/television-internet-telefonia.html?keyword=Claro%20Oficial&gad_source=1","contentType":"LandingPage","contentId":"CLARO_26_M_TOP_KW","templateId":"CLARO-SITE2","sourceId":"claro-top-kw","campaignId":"CLARO_26_M_TOP_KW","thankyouPageUrl":"https://claro-promociones.co/t/p/claro-top-kw/c2c","formId":"form_c2c_0","buttonId":"form_c2c_0_0","contactData":{"trackingId":"eb691b1b-8827-4cc2-adfb-b40504d70e4d","phone":phoneNumber,"ComunicacionesComerciales":"true"},"contactFiles":[]}

  const response = await fetch('https://claro-promociones.co/public/c2c/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    },
    body: JSON.stringify(payload)
  })
}

const spamTigo = async (phoneNumber) => {
  const payload = {"type":"aws","country":"co","token":"03AFcWeA7L4-czHxP-d1M2saYx6ZIrLq7tHMiH0_7OlnyL8YRNf8alfnOElZaqD9F7lnvKE9_mpa7UsSfxa4euEllemWjBQPd7k7CzoJyjjj5M9R-03ttHovnTEQ4XB7aUAiMYRq-MTwROBH4FJQKT1kUSF6jy7_AlDZNBgr2M9GrR3iXvvlNneOdiB_LNH7fxv25XGOg6sQ1GvJaqwNQ-8-_f5iblIuDQDvfOnm0gQUBeJztEMJzEraZr2ftW4z425Th9oOcAiZWOBlL46Y6UMDUCaRrUbp-qe3DJfYcK5C1HS5ILxGsajWzj0WE9UDXEjNjztP5f7VYZywQXzU5oHYbFfJPAKhxkCBdpFZW050vbe3SH_kmmMZe8jfxSqpKjkQ83t0WA2ZNlV1GMpHgrWQvTwvITWk7Byu17TDnFUlqv9mEB8l-iq4bmNk04WEQ6ZScbtk2RqAAyh2sRmEPp7gquGxw5WASzTKmKsLj9HLP1IZSPG5EZNlLHhrP7wsKc8a_5XWFxfdPWaSbcBK9akRQ_b6w-zvSCUlrr7eY9e020q9aWmm485nP4OHcTci-mzXKRg_pMWHQOQ2HqopxwrasL_NoF3eQGdWU1YX7YTGUw3LjDpdxVuSUP5qGkqemghKEHZksm6IOzg3zi2aeicD398N64Q6xY3N69HJw4lCMRrMAUap1VeMY","payload":{"formId":"CO-FORM-EMTELCOAWS-B2C-2024","formData":{"UNE_TeLlamaGen_NombreUsuario":names[randomNumber(0,4)],"UNE_TeLlamaGen_NumeroContacto2":phoneNumber,"UNE_TeLlamaGen_Ciudad":"05001","UNE_TeLlamaGen_Departamento":"05","UNE_TeLlamaGen_TipoSolicitud":"VENTA","parametro1":"search","parametro2":"sem","parametro3":"co-home-mkt_search_performance_home_blindajeantio_sem_cpl_ant_purebrand","UNE_TeLlamaGen_DescripcionOpcional":"search","UNE_TeLlamaGen_DescripcionOferta":"sem/co-home-mkt_search_performance_home_blindajeantio_sem_cpl_ant_purebrand","UNE_TeLlamaGen_ValorOferta":"955","UNE_TeLlamaGen_NumeroContacto1":"9553148212932","UNE_TeLlamaGen_IdOferta":"Home Trio BTS Digital","service":"Portal"}}}

  const response = await fetch('https://quhr14x5j1.execute-api.us-east-1.amazonaws.com/prod/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json()

  if (data.statusCode === 200){
    console.log('Tigo Spam Done')
  }
  else{
    console.error('Tigo Spam Failed')
  }
}

const form = document.getElementById('my-form')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const dataForm = Object.fromEntries(new FormData(document.getElementById('my-form')))
  spamWom(dataForm.phone)
  spamClaro(dataForm.phone)
  spamTigo(dataForm.phone)

  alert('SPAM HAS BEEN SENT')

})