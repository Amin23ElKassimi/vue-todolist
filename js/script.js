




// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
//  Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x":
//  cliccando su di essa, il todo viene rimosso dalla lista.


// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi":
//  cliccando sul pulsante,
//   il testo digitato viene letto e utilizzato per creare un nuovo todo,
//    che quindi viene aggiunto alla lista dei todo esistenti.do corrispondente (se done era uguale a false,
//      impostare true e viceversa) creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.









const { createApp } = Vue;

createApp({
    data() {
        return {
             todoList : [
                { text : 'Watch Spiderman Morales',
                    done : true,
                },
                { text : 'Read Harry Potter',
                    done : true,
                },
                { text : 'Create avatars',
                    done : false,
                },
                { text : 'Play to Fortnite',
                    done : true,
                },
                { text : 'Go to date',
                    done : false,
                },
            ]

        }
    },
    methods: {
        removeItem(index){
            this.todoList.splice(index,1);
            console.log(index);
        },

    },
}).mount('#app');