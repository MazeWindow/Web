
/** class which represens a person*/
class person{
  constructor(name, surname, gender, dateOfBirth){
  this.name=name;
  this.surname=surname;
  this.gender=gender;
  this.dateOfBirth=dateOfBirth;
  }
/**getters*/
  get Name(){
    return this.name_;
  }
  get Surname(){
    return this.surname_;
  }
  get Gender(){
    return this.gender_;
  }
  get DateOfBirth(){
    return this.dateOfBirth_;
  }
}

/**two people from the example*/
let Helen = new person("Helen","Yu","F","1/12/1950");
var Matt = new person("Matt","Edabit","M","1/1/1900");

/**actually function*/
function fiscaleCodeGenerator(certain_person){
  /**whole code consists of parts made from different person parameters*/
   var nameCode="", surnameCode="", dobCode="";
   var allConsonants=[
     "B","C","D","F","G",
     "H","J","K","L","M",
     "N","P","Q","R","S",
     "T","V","W","X","Z"];
   var name=certain_person.Name.toUpperCase();
   var surname=certain_person.Surname.toUpperCase();
   var gender=certain_person.Gender.toUpperCase();
   var dob=certain_person.DateOfBirth;

   /**computing surname code part*/
   if(surname.length<3){
     surnameCode=surname+"X";
   } else{
     consonants="";
     vowels="";
     for(char of surname){
       for(i=0; i<19; i++){
         if(char===allConsonants[i]){
           consonants=consonants+char;
         } else{
           vowels=vowels+char;
         }
       }
    }
    surnameCode=(consonants+vowels).slice(0,3);
  }

  /**computing name code part*/
  if(name.length<3){
    nameCode=name+"X";
  } else{
    consonants="";
    vowels="";
    var counter=0;
    for(char of surname){
      for(i=0; i<19; i++){
        if(char===allConsonants[i]){
          consonants=consonants+char;
          counter++;
        } else{
          vowels=vowels+char;
        }
      }
   }
   if(counter<=3){
     nameCode=(consonants+vowels).slice(0,3);
   } else if(counter==3){
     nameCode=consonants;
   } else if(counter>=3){
     nameCode=consonants[0]+consonants[2]+consonants[3];
   }
 }

 /**computing date of birth code part*/
 const monthsTable = {
   1: "A", 2: "B", 3: "C",
   4: "D", 5: "E", 6: "H",
   7: "L", 8: "M", 9: "P",
   10: "R", 11: "S", 12: "T"};

  /** computing year*/
  var yearCode=dob.substr(6,2);

  /** computing day*/
  var slashIndex=0;
  isDoubleDigit=false;
  var day=dob.substr(0,3);
  if (day[2]=="/"){
    slashIndex=2;
    isDoubleDigit=true;
    day=day[0]+day[1];
  } else{
    day=day[0];
    slashIndex=1;
  }
  if(gender=="M"&&isDoubleDigit==false){
      day="0"+day;
  } else if(gender=="M"){
    day=Number(day);
    day=day+40;
    day=String(day);
  }
  var dayCode=day;

  /**computing month*/
  var month=dob.substr(slashIndex+1,2);
  if(month[1]=="/"){
    month=month[0];
  }
  var monthCode=monthsTable[Number(month)];

  /**Compiling patrs*/
  var fiscaleCode=surnameCode+nameCode+yearCode+monthCode+dayCode;
  return fiscaleCode;
}

console.log(fiscaleCodeGenerator(Helen))
