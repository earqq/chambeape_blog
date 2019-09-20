<template>
    <div class="clients_section" id="clients">
            <div class="clients_wrapper">
                <div class="title">
                    <h2>Ingresa los dolares a cambiar<span>.</span></h2>
                </div>
                <input class='search_input' placeholder='Ejem: 1' @keyup='getChanges()' v-model='amount' type='text'>
                <div class='rwd'>
                  <table class="rwd_auto">
                    <thead>
                    <tr>
                      <th>Entidad</th>
                      <th>P. Compra</th>
                      <th>P. Venta</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr  >
                            <td title='Click para copiar' @click='copyText("sunat")'>SUNAT</td>
                            <td title='Click para copiar' @click='copyText("sunat")'>{{changePurchases.sunat}}</td>
                            <td title='Click para copiar' @click='copyText("sunat")'>{{changeSales.sunat}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("sunat")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en SUNAT para "+amount+" dolar(es): P. Venta: "+changeSales.sunat+" | P. Compra "+changePurchases.sunat'>Whatsapp</a>
                            </td>
                        </tr>     
                        <tr  >
                            <td title='Click para copiar' @click='copyText("nacion")'>Banco de la nación</td>
                            <td title='Click para copiar' @click='copyText("nacion")'>{{changePurchases.nacion}}</td>
                            <td title='Click para copiar' @click='copyText("nacion")'>{{changeSales.nacion}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("nacion")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en el Bancio de la Nación para "+amount+" dolar(es): P. Venta: "+changeSales.nacion+" | P. Compra "+changePurchases.nacion'>Whatsapp</a>
                            </td>
                        </tr>     
                        <tr  >
                            <td title='Click para copiar' @click='copyText("bcp")'>BCP</td>
                            <td title='Click para copiar' @click='copyText("bcp")'>{{changePurchases.bcp}}</td>
                            <td title='Click para copiar' @click='copyText("bcp")'>{{changeSales.bcp}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("bcp")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en el BCP para "+amount+" dolar(es): P. Venta: "+changeSales.bcp+" | P. Compra "+changePurchases.bcp'>Whatsapp</a>
                            </td>
                        </tr>     
                        <tr  >
                            <td title='Click para copiar' @click='copyText("interbank")'>Interbank</td>
                            <td title='Click para copiar' @click='copyText("interbank")'>{{changePurchases.interbank}}</td>
                            <td title='Click para copiar' @click='copyText("interbank")'>{{changeSales.interbank}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("interbank")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en el Interbank para "+amount+" dolar(es): P. Venta: "+changeSales.interbank+" | P. Compra "+changePurchases.interbank'>Whatsapp</a>
                            </td>
                        </tr>       
                        <tr  >
                            <td title='Click para copiar' @click='copyText("bbva")'>BBVA</td>
                            <td title='Click para copiar' @click='copyText("bbva")'>{{changePurchases.bbva}}</td>
                            <td title='Click para copiar' @click='copyText("bbva")'>{{changeSales.bbva}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("bbva")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en el BBVA para "+amount+" dolar(es): P. Venta: "+changeSales.bbva+" | P. Compra "+changePurchases.bbva'>Whatsapp</a>
                            </td>
                        </tr>         
                        <tr  >
                            <td title='Click para copiar' @click='copyText("scotiabank")'>Scotiabank</td>
                            <td title='Click para copiar' @click='copyText("scotiabank")'>{{changePurchases.scotiabank}}</td>
                            <td title='Click para copiar' @click='copyText("scotiabank")'>{{changeSales.scotiabank}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("scotiabank")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en el Scotiabank para "+amount+" dolar(es): P. Venta: "+changeSales.scotiabank+" | P. Compra "+changePurchases.scotiabank'>Whatsapp</a>
                            </td>
                        </tr>             
                        <tr  >
                            <td title='Click para copiar' @click='copyText("wester")'>Wester Union</td>
                            <td title='Click para copiar' @click='copyText("wester")'>{{changePurchases.wester}}</td>
                            <td title='Click para copiar' @click='copyText("wester")'>{{changeSales.wester}}</td>
                            <td>
                            <button class='button button-primary'  @click='copyText("wester")' >Copiar</button>
                            <a target='_blank'  :href='"https://api.whatsapp.com/send?&text=Tipo cambio en Wester Union para "+amount+" dolar(es): P. Venta: "+changeSales.wester+" | P. Compra "+changePurchases.wester'>Whatsapp</a>
                            </td>
                        </tr>        
                    </tbody>
                </table>
                </div>                
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectQuote: 1,
            mobile: false,
               changeSales:{
                sunat:0,
                bcp:0,
                interbank:0,
                wester:0,
                nacion:0,
                bbva:0,
                scotiabank:0
            },
            changePurchases:{
                sunat:0,
                bcp:0,
                interbank:0,
                wester:0,
                nacion:0,
                bbva:0,
                scotiabank:0
            },
            salesIn:{
                sunat:0,
                bcp:0,
                interbank:0,
                wester:0,
                nacion:0,
                bbva:0,
                scotiabank:0
            },
            purchasesIn:{
                sunat:0,
                bcp:0,
                interbank:0,
                wester:0,
                nacion:0,
                bbva:0,
                scotiabank:0
            },
            amount:1
        }
    },
    created () {
      this.tableCodes=this.codes
        if (process.client) { // en lado del servidor no existe windown, document, etc
            if (window.innerWidth < 850) this.mobile = true
            else this.mobile = false

            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    if (window.innerWidth < 850) this.mobile = true
                    else this.mobile = false
                })
            })
        }
        this.$axios.get('/api/exchange-rate')
        .then(res=>{
            this.salesIn=res.data.textSales
            this.purchasesIn=res.data.textPurchases
            this.getChanges()
        })
    },
    methods:{
       getChanges(){
          let amount=this.amount
          const purchasesIn=this.purchasesIn
          const salesIn=this.salesIn
          this.changePurchases.sunat=(parseFloat(purchasesIn.sunat)*amount).toFixed(3)
          this.changePurchases.bcp=(parseFloat(purchasesIn.bcp)*amount).toFixed(3)
          this.changePurchases.interbank=(parseFloat(purchasesIn.interbank)*amount).toFixed(3)
          this.changePurchases.wester=(parseFloat(purchasesIn.wester)*amount).toFixed(3)
          this.changePurchases.nacion=(parseFloat(purchasesIn.nacion)*amount).toFixed(3)
          this.changePurchases.bbva=(parseFloat(purchasesIn.bbva)*amount).toFixed(3)
          this.changePurchases.scotiabank=(parseFloat(purchasesIn.scotiabank)*amount).toFixed(3)
          this.changeSales.sunat=(parseFloat(salesIn.sunat)*amount).toFixed(3)
          this.changeSales.bcp=(parseFloat(salesIn.bcp)*amount).toFixed(3)
          this.changeSales.interbank=(parseFloat(salesIn.interbank)*amount).toFixed(3)
          this.changeSales.wester=(parseFloat(salesIn.wester)*amount).toFixed(3)
          this.changeSales.nacion=(parseFloat(salesIn.nacion)*amount).toFixed(3)
          this.changeSales.bbva=(parseFloat(salesIn.bbva)*amount).toFixed(3)
          this.changeSales.scotiabank=(parseFloat(salesIn.scotiabank)*amount).toFixed(3)
        },
      copyText(text){
        if (process.client) {
            let copyText=''
            if(text=='sunat')
                copyText='Tipo cambio en SUNAT para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.sunat+' y Precio Compra: '+this.changePurchases.sunat
            if(text=='nacion')
                copyText='Tipo cambio en el Banco de la Nación para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.nacion+' y Precio Compra: '+this.changePurchases.nacion
            if(text=='bcp')
                copyText='Tipo cambio en el BCP para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.bcp+' y Precio Compra: '+this.changePurchases.bcp
            if(text=='interbank')
                copyText='Tipo cambio en el Interbank para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.interbank+' y Precio Compra: '+this.changePurchases.interbank
            if(text=='bbva')
                copyText='Tipo cambio en el BBVA para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.bbva+' y Precio Compra: '+this.changePurchases.bbva
            if(text=='scotiabank')
                copyText='Tipo cambio en el Scotiabank para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.scotiabank+' y Precio Compra: '+this.changePurchases.scotiabank
            if(text=='wester')
                copyText='Tipo cambio en Wester Union para '+this.amount+' dolar(es) | Precio Venta: '+this.changeSales.wester+' y Precio Compra: '+this.changePurchases.wester
          var textArea = document.createElement("textarea");
          textArea.value = copyText
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("Copy");
          textArea.remove();
          console.log("si entra")
        }
      },
    }
    
}
</script>

<style lang="sass">
@import './assets/css/main'
@import './assets/css/animations'
.clients_section
    background-color: #f2f4f5
    display: flex
    justify-content: center
    .clients_wrapper
        width: $large
        display: flex
        align-items: center
        padding: 5rem 0
        flex-direction: column
        .search_input
          width: 100%
          padding: 10px
        .title
            display: flex
            flex-direction: column
            h2
                color: $primary_color
                font-family: $font_black
                margin-bottom: 10px
                font-size: 32px
                text-align: center
                span
                    display: inline
                    color: $accent_color
            small
                color: #353D48
                font-family: $font_regular
                font-size: 16px
                text-align: center
        .rwd_auto
          margin-top: 20px
          thead
            tr
              th
                font-size: 15px
          tbody
            tr
              td
                padding: 10px
                border-bottom: 1px solid rgba(0,0,0,0.1)
@media screen and (max-width: 1100px)
    .clients_section
        .clients_wrapper
            width: $medium
            padding: 3rem 0
            .title
                h2
                    font-size: 27px
                small   
                    font-size: 15px    

@media screen and (max-width: 850px)
    .clients_section
        .clients_wrapper
            width: $small
            .title
                h2
                    font-size: 25px
                small   
                    font-size: 14px
@media screen and (max-width: 500px)
    .clients_section
        .clients_wrapper
            width: $extra-small
            padding-left: 20px
            padding-right: 20px
            box-sizing: border-box
            .clients_content
                height: 400px
                padding-bottom: 1.5rem
                padding-top: 3.5rem
                aside i
                    margin-top: -50px
            .clients
                grid-template-columns: repeat( 2, 1fr )
            .title
                width: 100%
                h2
                    font-size: 20px
</style>
<style>
	
	table.width200, table.rwd_auto 
		.width200 th,.rwd_auto th {padding:5px;text-align:left;}
		.width200 td,.rwd_auto td {border-bottom:1px solid #ccc;padding:5px;text-align:left}
		.width200 tr:last-child td, .rwd_auto tr:last-child td{border:0}
		
	.rwd {width:100%;overflow:auto;}
		.rwd table.rwd_auto {width:auto;min-width:100%}
			.rwd_auto th,.rwd_auto td {white-space: nowrap;}
			
	@media only screen and (max-width: 760px), (min-width: 768px) and (max-width: 1024px)  
	{
	
		table.width200, .width200 thead, .width200 tbody, .width200 th, .width200 td, .width200 tr { display: block; }
		
		.width200 thead tr { position: absolute;top: -9999px;left: -9999px; }
		
		.width200 tr { border: 1px solid #ccc; }
		
		.width200 td { border: none;border-bottom: 1px solid #ccc; position: relative;padding-left: 50%;text-align:left }
		
		.width200 td:before {  position: absolute; top: 6px; left: 6px; width: 45%; padding-right: 10px; white-space: nowrap;}
			
		
		.descarto {display:none;}
		.fontsize {font-size:10px}
	}
	
	/* Smartphones (portrait and landscape) ----------- */
	@media only screen and (min-width : 320px) and (max-width : 500px) 
	{
		body { width: $extra-small; }
		.descarto {display:none;}
	}
	
	/* iPads (portrait and landscape) ----------- */
	@media only screen and (min-width: 768px) and (max-width: 1024px) 
	{
		body { width: $small; }
		.descarto {display:none;}
		.fontsize {font-size:10px}
	}
	
</style>