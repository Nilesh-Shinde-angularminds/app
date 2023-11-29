<template lang="">
    <div>
       <form @submit.prevent="submitForm">
    <!-- input  -->    
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="formData.name" @change="validateName">
    <span v-if="!nameValid && submitted" style="color: red;">Please enter a valid name</span><br>

    <!-- email -->
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="formData.email" @change="validateEmail">
    <span v-if="!emailValid && submitted" style="color: red;">Please enter a valid email</span><br>

    <!-- mobile -->
    <label for="mobile">Mobile No:</label>
    <input type="tel" id="mobile" v-model="formData.mobile" @change="validateMobile">
    <span v-if="!mobileValid && submitted" style="color: red;">Please enter a valid mobile number</span><br>

    <!-- select box -->
    <label for="occupation">Occupation:</label>
    <select id="occupation" v-model="formData.occupation">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>
    <span v-if="!mobileValid && submitted" style="color: red;">Please enter a valid mobile number</span><br>

    <!-- radio box -->
    <label>Gender:</label>
    <label for="male">Male</label>
    <input type="radio" id="male" value="male" v-model="formData.gender" @change="validateGender">
    <label for="female">Female</label>
    <input type="radio" id="female" value="female" v-model="formData.gender" @change="validateGender">
    <span v-if="!genderValid && submitted" style="color: red;">Please select a gender</span><br>

    <!-- check box -->
    <label>Hobbies:</label>
    <label for="hobby1">Reading</label>
    <input type="checkbox" id="hobby1" value="reading" v-model="formData.hobbies" @change="validateHobbies">
    <label for="hobby2">Gaming</label>
    <input type="checkbox" id="hobby2" value="gaming" v-model="formData.hobbies" @change="validateHobbies">
    <label for="hobby3">Traveling</label>
    <input type="checkbox" id="hobby3" value="traveling" v-model="formData.hobbies" @change="validateHobbies">
    <span v-if="formData.hobbies.length < 1 && submitted" style="color: red;">Please select at least one hobby</span><br>

    <!-- range -->
    <label for="feedback">Feedback (1-10):</label>
    <input type="range" id="feedback" v-model="formData.feedback" min="0" max="10" @change="validateFeedback">
    <span v-if="!feedbackValid && submitted" style="color: red;">Please select a valid feedback score between 1 and 10</span><br>


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

  //   watch: {
  //     formData: {
  //       handler(newValue, oldValue) {
  //         console.log("deepObject changed:", newValue, oldValue);
  //       },
  //       deep: true, // Set deep to true for deep watching
  //     },
  //   },
  methods: {
    submitForm() {
      this.submitted = true;
      this.validateName();
      this.validateEmail();
      this.validateMobile();
      this.validateGender();
      this.validateHobbies();
      this.validateFeedback();
      this.validateOccupation();

      this.formIsValid =
        this.nameValid &&
        this.emailValid &&
        this.mobileValid &&
        this.genderValid &&
        this.hobbiesValid &&
        this.feedbackValid;

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
  },
};
</script>
<style >
</style>