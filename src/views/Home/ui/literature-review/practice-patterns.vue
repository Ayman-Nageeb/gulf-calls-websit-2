<template>
  <div>
    <v-row transition="slide-y-transition">
      <v-col>
        <v-card outlined class="pa-6 title" v-animate-onscroll="{down: 'animate__animated animate__slideInLeft'}">
          <p>
            There are few surveys assessed the physicians’ perception, knowledge
            and practice toward the management of lipid parameters in various
            patient population in the Arabian Gulf countries. Most of these
            surveys primarily addressed the physician’s practice toward the
            management of LDL-C targets according to the different international
            lipid guidelines.
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
      <v-col cols="12" lg="6" sm="12">
        <h1
          class="display-1 font-weight-bold text-right mt-4"
          style="color: #fe7504"
          v-animate-onscroll="{down: 'animate__animated animate__slideInRight'}"
        >
          Physicians’ Perception and Practice Patterns of TG and Non-HDL-C
          Management
        </h1>
      </v-col>
    </v-row>
    <v-row v-if="showMore">
      <v-col class="title">
        <p>
          The Arabian CEPHEUS physician survey included 177 physicians, around
          42% were general practitioners, 31% cardiologist, 6% endocrinologist
          and 21% other medical specialist. In this survey, the physicians
          indicated they set lipid targets for 70% of their patients which is
          mainly for the LDL-C around (90%) and often for other lipid targets
          like TG (80%). The majority of the physicians (88%) used guidelines to
          establish the lipid targets and around half of them were using
          international guidelines. According to the physicians, the most
          recommended lipid lowering treatments (LLTs) were statins (85%),
          fibrates, and other treatments constituted small percentage (10%) and
          (5%) respectively.
        </p>
        <p>
          The awareness and practice of physicians can influence the
          achievements of lipid therapeutic goals and can play a major role in
          the translation of guideline-based evidence to the treatment choices
          they make in clinical practice . Despite great attention from the
          scientific community on statin intensity, combinations with
          non-statins like (ezetimibe and PCSK9 inhibitors), and LDL-C goals,
          there are some aspects of atherogenic TRLs levels and markers of this
          condition, such as TG and non-HDL-C, are often ignored in clinical
          practice. Furthermore, the awareness and knowledge of physicians in
          the management of dyslipidemia varied between countries. In 18
          countries in Eastern Europe, Asia, Africa, the Middle East and Latin
          America, the percentage of patients who achieved the risk-based target
          goals was 51.4% when estimated by physicians versus 39.9% when based
          on European Society of Cardiology (ESC)/European Atherosclerosis
          Society recommendations demonstrating an important gap between
          guidelines and clinical practice . A study by Smita I. Negi et al.
          showed around 33% of fellows (cardiology and endocrinology), and
          residents (internal medicine and family medicine) in-training, could
          not calculate non-HDL-C and were not aware of non-HDL-C goals based on
          the different CV risk groups. However, a survey conducted among 980
          physicians in Spain, showed more than 60% of physicians used non-HDL-C
          to diagnose patients with atherogenic dyslipidemia, and 99% prescribed
          a fibrate to reduce TG levels . In India, a survey participated by 404
          physicians, the most preferred treatments options for managing
          atherogenic dyslipidemia and high TG were statin-fibrate combination
          (55.1%) and fibrates (35.4%), respectively. Patients with controlled
          LDL-C but uncontrolled non-HDL-C, 52% of physicians chose not to alter
          pre-existing therapy .
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