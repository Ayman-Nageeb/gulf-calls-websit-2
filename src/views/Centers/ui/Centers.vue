<template>
  <div id="national-centers-view">
    <v-container style="max-width: 1080px">
      <h1
        class="display-2 font-weight-black text-center my-6"
        style="color: #fe7504"
      >
        Discover Our National Centers
      </h1>

      <v-card
        outlined
        class="my-12 pa-6"
        v-for="(center, index) of centers"
        :key="index"
      >
        <v-row>
          <v-col
            v-animate-onscroll="{
              down: 'animate__animated animate__fadeInLeftBig',
            }"
          >
            <h1 style="color: #536dfe" class="headline font-weight-bold">
              {{ center.name }}
            </h1>
            <p class="text-justify subtitle-2">
              {{ center.about }}
            </p>
          </v-col>
          <v-col
            lg="6"
            sm="12"
            xs="12"
            v-animate-onscroll="{
              down: 'animate__animated animate__fadeInRightBig',
            }"
          >
            <div>
              <v-img :src="center.image" contain />
            </div>
          </v-col>
        </v-row>
        <v-divider class="mt-6 mb-3"></v-divider>
        <v-card-actions>
          <img
            :src="`https://countryflagsapi.com/png/${center.country}`"
            style="width: 40px; border: 1px solid #ccc"
          />
          <span class="mx-2 font-weight-bold" style="color: #fe7504">
            {{ center.country }}
          </span>
          {{ center.address }}
          <v-spacer></v-spacer>
          <div>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-facebook</v-icon>
            </v-btn>
            <span class="mx-2"></span>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-twitter</v-icon>
            </v-btn>
            <span class="mx-2"></span>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-email</v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    centers: [
      {
        name: "A national hospital",
        image:
          "https://assetsamerica.com/wp-content/uploads/Lines-of-Business/Hospital-Building/POSTED/B-WI_Columbia-StMarys_Hospital_2_DriDesign_lo-1900x1264.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet commodo magna. Aliquam eleifend ligula sed blandit scelerisque. Donec tempor consectetur erat eu finibus. Curabitur sit amet turpis tellus. Aliquam in magna ipsum. Aenean non diam fermentum tellus venenatis viverra. Suspendisse pharetra sagittis arcu, vitae vulputate diam gravida ac. Donec ut tempor neque, quis porttitor magna. Mauris sed consequat mauris. Praesent est magna, ultricies ut nisi in, consectetur laoreet mi. Mauris non volutpat arcu. Aenean ac turpis dapibus est rutrum condimentum et quis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce blandit laoreet ipsum, vitae pretium mi tempor eu. Praesent tincidunt, nibh et consequat tristique, lacus lacus lacinia tellus, vel efficitur eros turpis a lectus. Cras scelerisque, ex vitae blandit laoreet, arcu enim consequat eros, ac sodales dolor enim quis neque. ",
        country: "Oman",
        address: "Mascat, Street No 2",
      },
      {
        name: "A national hospital",
        image:
          "https://media.istockphoto.com/photos/building-with-large-h-sign-for-hospital-picture-id855680246?k=20&m=855680246&s=612x612&w=0&h=AsYKIEa_I6zsbVHIORzH-ZlFgcEuJqXA3AsqfG8w3Mo=",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet commodo magna. Aliquam eleifend ligula sed blandit scelerisque. Donec tempor consectetur erat eu finibus. Curabitur sit amet turpis tellus. Aliquam in magna ipsum. Aenean non diam fermentum tellus venenatis viverra. Suspendisse pharetra sagittis arcu, vitae vulputate diam gravida ac. Donec ut tempor neque, quis porttitor magna. Mauris sed consequat mauris. Praesent est magna, ultricies ut nisi in, consectetur laoreet mi. Mauris non volutpat arcu. Aenean ac turpis dapibus est rutrum condimentum et quis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce blandit laoreet ipsum, vitae pretium mi tempor eu. Praesent tincidunt, nibh et consequat tristique, lacus lacus lacinia tellus, vel efficitur eros turpis a lectus. Cras scelerisque, ex vitae blandit laoreet, arcu enim consequat eros, ac sodales dolor enim quis neque. ",
        country: "Qatar",
        address: "Mascat, Street No 2",
      },
      {
        name: "A national hospital",
        image:
          "https://media.istockphoto.com/photos/building-with-large-h-sign-for-hospital-picture-id1130389312?k=20&m=1130389312&s=170667a&w=0&h=6nR9_MoLaY5EfgoBdrmO990tgI9a-8u3Xv0ta3Edisk=",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet commodo magna. Aliquam eleifend ligula sed blandit scelerisque. Donec tempor consectetur erat eu finibus. Curabitur sit amet turpis tellus. Aliquam in magna ipsum. Aenean non diam fermentum tellus venenatis viverra. Suspendisse pharetra sagittis arcu, vitae vulputate diam gravida ac. Donec ut tempor neque, quis porttitor magna. Mauris sed consequat mauris. Praesent est magna, ultricies ut nisi in, consectetur laoreet mi. Mauris non volutpat arcu. Aenean ac turpis dapibus est rutrum condimentum et quis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce blandit laoreet ipsum, vitae pretium mi tempor eu. Praesent tincidunt, nibh et consequat tristique, lacus lacus lacinia tellus, vel efficitur eros turpis a lectus. Cras scelerisque, ex vitae blandit laoreet, arcu enim consequat eros, ac sodales dolor enim quis neque. ",
        country: "United Arab Emirates",
        address: "Mascat, Street No 2",
      },
    ],
  }),
};
</script>

<style>
</style>