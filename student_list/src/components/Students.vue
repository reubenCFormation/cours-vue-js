
<template>
<!--
    Vue Template syntaxe Ici, que se passe t'il? Vue va pouvoir parses le Vue Template Syntaxe et en creer un objet javascript qui representera cette hiarchie. Il pourra aussi ecouter les ecouters d'evenements pour mettre a jour l'etat et pourra afficher des valeurs dynamiques via la syntaxe {{valeur}}
-->
  <div class="mt-5">
   
   
    <h4 class="text-info"> Bienvenue dans ma liste d'etudiants! </h4>
    <div v-if="errorMsg">
        <div class="text-center text-danger"> {{errorMsg}}  </div>
     </div>
    <form @submit="addStudent">
        <div class="form-group">
            <label for="exampleInputEmail1">Prenom</label> 
            <!--
                le v-model et une maniere de lier la valeur que l'on saisi dans dans ce champ a la propriéte firstname en dessous dans notre data.
            -->
            <input type="text" class="form-control" placeholder="Prenom" v-model="firstname">
    
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1"> Age </label>
            <input type="text" class="form-control" placeholder="Age" v-model="age">
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1"> Moyenne </label>
            <input type="text" class="form-control"  placeholder="Moyenne" v-model="score">
        </div>
        <br/>
       <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary w-25">Envoyer</button>
       </div>
       
    </form>
    <br/>
 
    <table class="table table-striped table-bordered">
        <thead>
            <th class="text-center"> Nom </th>
            <th class="text-center"> Age </th>
            <th class="text-center"> Moyenne</th>
        </thead>

        <tbody>
            <!--
                Ici, on boucle sur nos etudiants et a chaque tour de boucle, on va afficher leur attributs
            -->
            <tr v-for="student in students" :key="student">
                <td class="text-center"> {{student.firstname}} </td>
                <td class="text-center"> {{student.age}} </td>
                <td class="text-center"> {{student.score}} </td>
            </tr>
        </tbody>

    </table>
   
  </div>

</template>

<script>


export default{
   
    name:"Students",
    data(){
        /*
            represente nos etats, quand l'une de ces valuers sera mis a jour, le virtual dom detectera ce changement et ne mettra a jour que la partie du vrai DOM qui a vraiment changé
        */
        return {
            students:[],
            firstname:"",
            score:"",
            age:"",
            errorMsg:""
        }
    },

    methods:{
        addStudent(event){
            event.preventDefault();
            if(this.firstname && this.score && this.age){
                // si toutes les valeurs de notre formulaire seront  remplis, nous allons rajouter notre etudiant dans notre tableau et nous allons ensuite mettre a jour l'etat des etudiants ce qui mettra a jour notre virtual DOM et ensuite le vrai DOM avec un rafraichissement optimale etc. 
                const studentsCopy=this.students;
                studentsCopy.push({age:this.age,score:this.score,firstname:this.firstname});
                this.students=studentsCopy;
                this.clearFormValues();
            }

            else{
                this.errorMsg="Vous avez des champs vides dans votre saisi"
            }
            
           
        },

        clearFormValues(){
            this.firstname="";
            this.age="";
            this.score="";
        },

        buildInitialStudents(){
            // ici on crée un tableau vide et on l'alimente avec des valuers, apres on va "mettre a jour l'etat de students"
            const studentsCopy=[];
            studentsCopy.push({age:16,firstname:"Benoit",score:15},{age:17,firstname:"Charles",score:14},{age:17,firstname:"Christophe",score:16});
            this.students=studentsCopy;
        }

        
    },

    mounted(){
        console.log("the component is mounted");
        // ici on fera appel a notre methode buildInitialStudents pour pouvoir afficher des etudiants du moment que le composant est "monté" et que le virtual DOM est "connecté" au vrai DOM
        this.buildInitialStudents();
    }
}
</script>

