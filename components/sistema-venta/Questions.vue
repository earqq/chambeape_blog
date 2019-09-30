<template>
    <div class="clients_section" id="clients">
            <div class="clients_wrapper">
                <div class="title">
                    <h2>Ingresa tu sugerencia<span>.</span></h2>
                </div>
                <p>Sugerencia</p>
                <input class='search_input' placeholder='Ejem: Yo creo podrian .....' v-model='suggestion.description' type='text'>                             
                <p>Correo</p>
                <input class='search_input' placeholder='Email' v-model='suggestion.email' type='text'> 
                <br>            
                <button @click='sendSuggestion()'>Enviar sugerencia</button>                
                <div class='rwd'>
                    <table class="rwd_auto">
                        <thead>
                        <tr>
                        <th>Idea</th>
                        <th>Votos</th>
                        <th>Votar</th>
                        <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr  v-for='suggestionVote in suggestions' v-bind:key='suggestionVote.id' >
                                <td >{{suggestionVote.description}}</td>
                                <td >{{suggestionVote.votes}}</td>
                                <td ><button class='button button-primary'  @click='addVote(suggestionVote._id)' >Votar</button></td>
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
            suggestion:{
                id:0,
                description:'',
                email:'',
                votes:0

            },
            suggestions:[]
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
        this.getSuggestions()
    },
    methods:{
        getSuggestions(){
            this.$axios.get('/api/suggestions')
            .then(res=>{
                this.suggestions=res.data
                console.log(this.suggestions)
            }).catch(err=>{
                console.log("error")
                console.log(err)
            })
        },
        sendSuggestion(){
            if(this.suggestion.description!='' && this.suggestion.email!=''){
                this.$axios.post('/api/suggestion/save', this.suggestion)
                .then(res=>{
                    this.getSuggestions()
                    this.suggestion={}
                    console.log("guardo")
                })                
            }else{
                alert('Llene todos los campos')
            }            
        },
        addVote(id){
            this.$axios.post('/api/suggestion/update/'+id)
            .then(res=>{
                this.getSuggestions()
                console.log("actualizo")
            })
        }
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
    button
        padding: 5px
        padding-left: 10px
        padding-right: 10px
        background: #17de8b
        border-radius: 7px
    a
        padding: 5px
        text-decoration: none
        background: #17de8b
        border-radius: 7px
        color: black
        font-size: 14px
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