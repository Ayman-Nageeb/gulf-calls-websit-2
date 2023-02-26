<template>
    <v-dialog
      :value="show"
      scrollable
      :overlay="false"
      persistent
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card class="pa-2" elevation="2" max-width="500px">
        <v-card-title class="font-weight-bold">
          {{ alertTitle }}
        </v-card-title>
        <v-card-text>
          <p class="headline">{{ alertMessage }}</p>
        </v-card-text>
        <v-card-actions class="py-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="cancel">
            <v-icon left>mdi-cancel</v-icon>
            <span>Cancel</span>
          </v-btn>
          <v-btn color="error" text @click="confirm">
            <v-icon left>mdi-delete</v-icon>
            <span>Remove</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: "",
      },
      message: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        alertTitle: '',
        alertMessage: '',
      }
    },
    created(){
      if(this.title.trim() == ''){
        this.alertTitle = "Delete this item ?";
      }
      if(this.message.trim() == ''){
        this.alertMessage = "once deleted you can not get it back!";
      }
    },
    methods: {
      cancel() {
        this.$emit("cancel", "GUI event");
      },
      confirm() {
        this.$emit("confirm", "GUI event");
      },
    },
    watch: {
      title(value){
        this.alertTitle = value;
      },
      message(value){
        this.alertMessage = value;
      }
    }
  };
  </script>
  
  <style></style>