<template>
  <div id="national-leaders-view">
    <v-container style="max-width: 1080px">
      <h1 class="display-2 font-weight-black text-center" style="color: #fe7504">
        Meet our National Leaders
      </h1>
      <div class="py-4"></div>
      <v-row>
        <v-col
          v-for="(leader, index) of leaders"
          :key="index"
          lg="6"
          md="12"
          sm="12"
          xs="12"
        >
          <v-card elevation="0" outlined class="ma-4 pa-4" min-height="350px" v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }">
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <div>
                    <v-avatar size="140" color="#cccc">
                      <img :src="leader.avatar" :alt="leader.name" />
                    </v-avatar>
                  </div>
                </v-col>
                <v-col>
                  <div class="px-5">
                    <p class="secondary--text title">{{ leader.job }}</p>
                    <p class="headline font-weight-black" color="#53acfe">
                      {{ leader.name }}
                    </p>
                    <p>{{ leader.bio }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider class="mt-1"></v-divider>
            <v-card-actions>
              <div class="px-auto mt-4" style="text-align: center">
                <img
                  :src="`https://countryflagsapi.com/png/${leader.country}`"
                  style="width: 40px; border: 1px solid #ccc"
                />
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-btn color="#53acfe" icon>
                  <v-icon size="32">mdi-facebook</v-icon>
                </v-btn>
                <span class="mx-2"></span>
                <v-btn color="#53acfe" icon>
                  <v-icon size="32">mdi-twitter</v-icon>
                </v-btn>
                <span class="mx-2"></span>
                <v-btn color="#53acfe" icon>
                  <v-icon size="32">mdi-email</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    leaders: [
      {
        name: "Prof. Khalid Al-Rasadi",
        job: "Principal Investigator (PI)",
        bio: "Medical Research Center, College of Medicine & Health Sciences, Sultan Qaboos University, Muscat",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Oman",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr.Khalid Al Waili",
        job: "National Leader",
        bio: "Department of Biochemistry, Sultan Qaboos University, Muscat",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Oman",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Prof. Mohammad Zubaid",
        job: "National Leader",
        bio: "Department of Medicine, Faculty of Medicine, Kuwait University, Kuwait",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Kuwait",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr.Wael Almahmeed",
        job: "National Leader",
        bio: "Heart and Vascular Institute, Cleveland Clinic, Abu Dhabi",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "United Arab Emirates",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr. Fatheya Al Awadi",
        job: "National Leader",
        bio: "Head Of Endocrine Unit–Dubai Hospital",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "United Arab Emirates",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr Nasreen Al Sayed",
        job: "National Leader",
        bio: "Consultant Endocrinologist & Lipidologist at Gulf Diabetes & Endocrine Specialist Center (Former Joslin Boston affiliate).",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Bahrain",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr Mahmoud Zirie",
        job: "National Leader",
        bio: "Senior Consultant, Head of Endocrinology at Hamad Medical Corporation",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Qatar",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr Hani Sabbour",
        job: "National Leader",
        bio: "Consultant Cardiologist at Cleveland Clinic Abu Dhabi",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "United Arab Emirates",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Dr Alaaeldin Mohammed Khidir Bashier",
        job: "National Leader",
        bio: "Consultant Endocrinologist Dubai Hospital",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "United Arab Emirates",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
      {
        name: "Prof. Ibrahim Al-Zakwani",
        job: "Data and Stastistical Analysis Specialist",
        bio: "Department of Pharmacology & Clinical Pharmacy, College of Medicine & Health Sciences, Sultan Qaboos University, Muscat",
        avatar: "https://www.tonica.la/__export/1620240585273/sites/debate/img/2021/05/05/la-casa-de-papel-el-profesor-alvaro-morte-temporada-5.jpg_423682103.jpg",
        country: "Oman",
        links: {
          facebook: "",
          twitter: "",
          email: "",
        },
      },
    ],
  }),
};
</script>

<style>
</style>