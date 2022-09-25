<template>
  <div >
    <v-row>
      <v-col cols="12" lg="6" sm="12"  v-animate-onscroll="{down: 'animate__animated animate__fadeInLeftBig'}">
        <h1 class="display-1 font-weight-bold mt-4 text-justify" style="color: #fe7504">
          Arabian Gulf CEPHEUS Study
        </h1>
      </v-col>
      <v-col  v-animate-onscroll="{down: 'animate__animated animate__fadeInRightBig'}">
        <v-card outlined class="pa-6 title text-justify">
          <p>
            In the Arabian Gulf region, the only study that demonstrated care
            gaps in the management of patients with high TG levels and high risk
            for CVD was the centralized pan-Middle East Survey on the under
            treatment of hypercholesterolemia (CEPHEUS) study.
          </p>
          <v-btn
            color="#fe7504"
            text
            large
            @click="showMore = true"
            v-if="!showMore"
          >
            show more
            <span class="mx-1"></span>
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="showMore">
      <v-col class="title text-justify">
        <p>
          The CEPHEUS was a multi-center non-interventional survey in 6 Arabian
          Gulf countries (Bahrain, Oman, Qatar, the United Arab Emirates [UAE],
          the Kingdom of Saudi Arabia [KSA], and Kuwait). It was conducted
          between November 2009 and July 2010, and 5457 out-patients were
          enrolled by 177 specialists and primary care physicians. The study
          included patients who were ≥18 years and on lipid-lowering drugs for ≥
          3 months. The primary objective of the study was to determine the
          proportion of patients that achieved the LDL-C goals according to the
          2004 NCEP-ATP-III guidelines. Results showed that 32% of the very high
          CVD risk did achieve the LDL-C goal.
        </p>
        <p>
          Moreover, patients with very high risk for CVD and high TG levels
          &gt;1.7 mmol/L (&gt;150 mg/dL), were less likely to achieve the LDL-C
          target &lt;1.8 mmol/L (&lt;70 mg/dL) and non-HDL-C target &lt;2.6
          mmol/L (&lt;100 mg/dL) compared to patients with very high risk for
          CVD and normal TG levels &lt;1.7 mmol/L (&lt;150 mg/dL), for LDL-C,
          (19% versus 32%; p&lt;0.001) and, for non-HDL-C, (23% versus 51%;
          p&lt;0.001) respectively [13,14]. Additionally, patients with very
          high risk for CVD, controlled LDL-C target &lt;1.8 mmol/L (&lt;70
          mg/dL), and high TG levels, were less likely to achieve the non-HDL-C
          target compared to the same patients but with normal TG levels (2.4%
          versus 38%; p&lt;0.001) [15]. Although, the majority of very high CVD
          risk patients and high TG levels in the CEPHEUS study were on statin
          monotherapy (91%), only 6.6% were on statin and other combination
          therapies including fibrate which could have a significant effect in
          reducing TG levels and achievement of non-HDL-C target therapy
          [13-15]. Clinical data and lipid levels were collected at a single
          visit to the treating physician, so long-term changes in LDL-C, TG and
          non-HDL-C levels, the cardiovascular events and, the association
          between changes in lipid levels and CVD events were not recorded.
        </p>
        <v-btn color="#fe7504" text large @click="showMore = false">
          hide
          <span class="mx-1"></span>
          <v-icon>mdi-chevron-double-up</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    showMore: false,
  }),
};
</script>
  
  <style>
</style>