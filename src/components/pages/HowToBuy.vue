<template>
  <div>
    <headerMenu />

    <!-- =======styleHeader====== -->
    <div class="header">
      <div class="container" style="padding-top: 45px; padding-bottom: 87px">
        <div class="inside">
          <small style="color: white">Главная / Как покупать</small>
          <h1
            style="
              font-weight: 800;
              font-size: 48px;
              line-height: 60px;
              padding-top: 29px;
              padding-bottom: 9px;
            "
          >
            Научим покупать вВеликобритании!
          </h1>
          <h3 style="color: white; padding-bottom: 40px">и экономить до 70%</h3>
          <button>Получить адрес в UK</button>
        </div>
      </div>
    </div>
    <!-- ======================== -->

    <HowBuy5content/>

    <!-- ============styleHeader======== -->
    <div class="header">
      <div
        class="container"
        style="padding-top: 112px; padding-bottom: 112px; margin-bottom: 200px"
      >
        <div class="row">
          <div class="col-md-9 col-sm-12 satr">
            <h1 style="font-size: 44px !important">
              Остались вопросы? Спросите нас в соцсетях!
            </h1>
          </div>
          <div class="col-md-3 ccol-sm-12">
            <div class="blockImgs">
              <img src="images/Ватсап (1).png" alt="" />
              <img src="images/Вайбер (1).png" alt="" />
              <img src="images/Чат (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- =============================== -->

    <FooterContent />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterContent from "@/components/FooterContent.vue";
import HowBuy5content from "@/components/pageContents/HowBuy5content.vue"
export default {
  components: {
    HeaderMenu,
    FooterContent,
    HowBuy5content
  },
};
</script>

<style>
.zeroNumbers {
  margin-top: 121px;
  margin-bottom: 50px;
}

.zeroNumbers h1 {
  font-weight: 800;
  font-size: 44px;
  margin-bottom: 25px;
}

.first label {
  width: 100%;
}
.first label span {
  vertical-align: middle;
  font-size: 80px;
  color: #01cd7d;
  padding-right: 46px;
  padding-left: 5px;
  border-right: 2px solid #c0c9d7;
}
.first label strong {
  display: inline-block;
  vertical-align: middle;
  margin-left: 33px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
}
.first label p {
  padding-left: 5px;
  padding-top: 15px;
}
.first, .rasmTop{
  margin-top: 40px !important;
}

@media only screen and (max-width: 767.5px) {
  .first span {
    border-right: none;
    display: inline-block;
    padding: 0;
    text-align: center;
  }

  .first strong {
    display: inline-block;
    text-align: center;
    font-size: medium;
    margin: 0;
  }

  .first p {
    text-align: center;
  }

  .blockImgs {
    text-align: center;
  }

  .satr {
    /* text-align: center; */
    padding-bottom: 20px;
  }

  .header {
    text-align: center;
  }
}
</style>