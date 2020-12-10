// x creare una lista di cose da fare e mostrarla in pagina con Vue;
// x aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.

var app = new Vue(
  {
    el:"#root",
    data: {
      newItem: "",
      list: [
        "fare la spesa",
        "comprare il pane",
        "comprare l'acqua",
        "andare al parco"
      ]
    },
    methods:{
      addToDo: function (){
        this.list.push(this.newItem);
      }
    }
  }
)
