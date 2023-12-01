<template lang="">
    <div class='outerContainer'>
       <form @submit.prevent="submitForm">
    <!-- input  -->    
    <div>
       <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" @input="validateName">
    </div>
    <span v-if="!nameValid && submitted" class="warning-font-size" style="color: red;">Please enter a valid name</span><br>

    <!-- email -->
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" @input="validateEmail">
    </div>
    <span v-if="!emailValid && submitted" style="color: red;"  class="warning-font-size">Please enter a valid email</span><br>

    <!-- mobile -->
   <div>
       <label for="mobile">Mobile No:</label>
       <input type="tel" id="mobile" v-model="formData.mobile" @input="validateMobile">
   </div>
    <span v-if="!mobileValid && submitted" style="color: red;"  class="warning-font-size">Please enter a valid mobile number</span><br>

    <!-- select box -->
    <div>
          <label for="occupation">Occupation:</label>
          <select id="occupation" v-model="formData.occupation" @change="validateOccupation">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
    </div>
    <span v-if="!occupationValid && submitted" style="color: red;"  class="warning-font-size">Please enter a valid occupation</span><br>

    <!-- radio box -->
    <div>
          <label>Gender:</label>
          <input type="radio" id="male" value="male" v-model="formData.gender" @change="validateGender">
          <label for="male">Male</label>
          <input type="radio" id="female" value="female" v-model="formData.gender" @change="validateGender">
          <label for="female">Female</label>
    </div>
    <span v-if="!genderValid && submitted" style="color: red;"  class="warning-font-size">Please select a gender</span><br>

    <!-- check box -->
   <div>
           <label>Hobbies:</label>
          <label for="hobby1">Reading</label>
          <input type="checkbox" id="hobby1" value="reading" v-model="formData.hobbies" @input="validateHobbies">
          <label for="hobby2">Gaming</label>
          <input type="checkbox" id="hobby2" value="gaming" v-model="formData.hobbies" @input="validateHobbies">
          <label for="hobby3">Traveling</label>
          <input type="checkbox" id="hobby3" value="traveling" v-model="formData.hobbies" @input="validateHobbies">
   </div>
    <span v-if="formData.hobbies.length < 1 && submitted" style="color: red;"  class="warning-font-size">Please select at least one hobby</span><br>

    <!-- range -->
    <div>
          <label for="feedback">Feedback (1-10):</label>
          <input type="range" id="feedback" v-model="formData.feedback" min="0" max="10" @input="validateFeedback">
    </div>
    <span v-if="!feedbackValid && submitted" style="color: red;"  class="warning-font-size">Please select a valid feedback score between 1 and 10</span><br><br>

    <!-- experiance -->
      <span>Experience: </span>
      <div v-for="(experience, index) in formData.experiences" :key="index" class="experience" >
        <label for="companyName">Company Name:</label>
        <input type="text" v-model="experience.companyName" @input='validExperiance'><br>
        <span v-if="!experience.companyNameValid && submitted" style="color: red;"  class="warning-font-size">Please enter a valid name</span><br>

        <label for="experience">Experience:</label>
        <input type="text" v-model="experience.experience" @input="validExperiance"><br>

        <span v-if="!experience.experienceValid && submitted" style="color: red;"  class="warning-font-size">Please enter a valid name</span><br>
        <button @click="removeExperience(index)">Remove</button>
      </div>

    <button type='button' @click="addExperience">Add Experience</button>
    <button @click='submitExperiace' >Submit experiance</button>


    <button type="submit" >Submit</button>
  </form>
    </div>
</template>
<script>
export default {
  name: "FoRms",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        mobile: "",
        occupation: "",
        gender: "",
        hobbies: [],
        feedback: 0,
        experiences: [
          {
            companyName: "",
            experience: "",
            companyNameValid: true,
            experienceValid: true,
          },
        ],
      },
      nameValid: true,
      emailValid: true,
      mobileValid: true,
      occupationValid: true,
      genderValid: true,
      hobbiesValid: true,
      feedbackValid: true,
      formIsValid: false,
      submitted: false,
    };
  },

  // watch: {
  //   formData: {
  //     handler(oldVal, newVal) {
  //       console.log(oldVal, newVal);
  //       if (oldVal != newVal) {
  //         this.validateName();
  //         this.validateEmail();
  //         this.validateMobile();
  //         this.validateGender();
  //         this.validateHobbies();
  //         this.validateFeedback();
  //         this.validateOccupation();
  //         this.validExperiance();
  //       }
  //     },
  //     deep: true, // Set deep to true for deep watching
  //   },
  // },

  methods: {
    submitExperiace() {
      console.log(this.formData.experiences);
    },
    submitForm() {
      this.submitted = true;
      this.validateName();
      this.validateEmail();
      this.validateMobile();
      this.validateGender();
      this.validateHobbies();
      this.validateFeedback();
      this.validateOccupation();
      this.validExperiance();

      this.formIsValid =
        this.nameValid &&
        this.emailValid &&
        this.mobileValid &&
        this.genderValid &&
        this.hobbiesValid &&
        this.feedbackValid &&
        this.occupationValid &&
        this.formData.experiences?.every(
          (item) => item.companyName != "" && item.experience != ""
        );

      if (this.formIsValid) {
        console.log("Form submitted:", this.formData);
      } else {
        console.log(
          "Form submission failed. Please check the form for errors."
        );
      }
    },
    validateName() {
      this.nameValid = this.formData.name.trim() !== "";
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValid = emailRegex.test(this.formData.email);
    },
    validateMobile() {
      const mobileRegex = /^\d{10}$/;
      this.mobileValid = mobileRegex.test(this.formData.mobile);
    },
    validateOccupation() {
      this.occupationValid = this.formData.occupation !== "";
    },
    validateGender() {
      this.genderValid = this.formData.gender !== "";
    },
    validateHobbies() {
      this.hobbiesValid = this.formData.hobbies.length > 0;
    },
    validateFeedback() {
      this.feedbackValid =
        this.formData.feedback >= 1 && this.formData.feedback <= 10;
    },
    addExperience() {
      this.formData.experiences.push({ companyName: "", experience: "" });
    },
    removeExperience(index) {
      this.formData.experiences.splice(index, 1);
    },
    validExperiance() {
      this.formData.experiences = this.formData.experiences.map((item) => ({
        ...item,
        companyNameValid: item.companyName.trim() !== "" ? true : false,
        experienceValid: item.experience.trim() !== "" ? true : false,
      }));
      console.log(this.formData.experiences);
    },
  },
};
</script>
<style >
.outerContainer {
  margin-left: 30%;
}
.warning-font-size {
  font-size: 12px;
}
.experience {
  border: 1px solid black !important;
  padding: 10px;
  margin: 5px;
  width: 350px;
  border-radius: 5px;
}
</style>