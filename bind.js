var skillks = {
    primarySkill : "core JavaScript",
    secondarySkill : "React and Redux",
    getSkills : function(){
        console.log(this.primarySkill, this.secondarySkill);// This will print the values of primarySkill and secondarySkill

        setTimeout(function name(){
            console.log(this.primarySkill, this.secondarySkill);//This will print undefined undefined because the context of this is changed.
        }, 1);
    }
}

skillks.getSkills();