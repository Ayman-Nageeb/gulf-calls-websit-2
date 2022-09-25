<template>
  <div>
    <v-container style="max-width: 1080px">
      <h1 class="display-1 font-weight-bold text-center" style="color: #fe7504">
        <v-img :src="require('../../../assets/summary.png')" height="100px" contain />
        Summary
      </h1>
      <v-card
        outlined
        class="pa-9 title mt-8 text-justify"
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      >
        Several studies have demonstrated a strong association between high
        triglyceride levels (TG), high atherogenic triglyceride rich lipoprotein
        levels (TRLs) and cardiovascular diseases (CVD) . In a retrospective
        study included 2,039 diabetic patients recruited from primary care
        setting in Oman and followed for a median period of 5.6 years, there was
        no significant association between high TG level >1.7 mmol/L (150 mg/dL)
        and CVD . Non-high-density lipoprotein cholesterol (non-HDL-C), which is
        defined as total cholesterol (TC) – high density lipoprotein cholesterol
        (HDL-C), is a good measure of all atherogenic TRL levels, which are
        highly prevalent in patients with diabetes mellites (DM) . The Arabian
        Gulf region is well known to be amongst the highest regions in the world
        for the very high rates of coronary artery disease risk factors, such as
        diabetes mellitus, hypertension, dyslipidemia, metabolic syndrome and
        smoking . Previous studies in the region showed that low density
        lipoprotein cholesterol (LDL-C) and non-HDL-C target levels are not
        achieved in a high proportion of patients with high TG levels and very
        high risk for CVD. Moreover, non-HDL-C were not achieved in large
        proportion of patients with controlled LDL-C target levels and high TG
        levels . Recent updated guideline considered the use of fenofibrate or
        bezafibrate or high-dose omega-3 fatty acid with lifestyle measure and
        statins for very high CVD risk patients to reduce the atherogenic TRLs
        levels and improve the residual CVD . The Middle East: 2021 update
        consensus recommend the use of non-HDL-C as primary therapeutic target
        for patients with high TG levels and very high risk for CVD .
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>