<template>
  <div>
    <div class="container" style="margin-bottom: 150px; margin-top: 50px">
      <h1
        style="
          margin-bottom: 50px;
          font-weight: 800;
          font-size: 38px;
          line-height: 50px;
        "
      >
        4 простых шага для ваших<br />
        покупок в Великобритании
      </h1>
      <div class="row" style="margin-bottom: 30px">
        <div class="col-lg-3 col-md-6 col-sm-12 cw">
          <img
            src="@/assets/images/illustrations/Illustration.png"
            class="img-fluid"
            alt=""
          /><br />
          <strong>ВЫ ВЫБИРАЕТЕ <br />ТОВАР</strong>
          <p
            style="
              font-size: 16px;
              line-height: 25px;
              margin-top: 10px;
              opacity: 0.7;
            "
          >
            в английском магазине, оплачиваете и<br />
            указываете
            <b style="font-weight: 700; color: rgb(32, 232, 32)"
              >адрес склада</b
            >
            OkeyPost
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 cw">
          <img
            src="@/assets/images/illustrations/Illustration (1).png"
            class="img-fluid"
            alt=""
          /><br />
          <strong>ПОКУПКИ ПРИХОДЯТ <br />НА СКЛАД</strong>
          <p
            style="
              font-size: 16px;
              line-height: 25px;
              margin-top: 10px;
              opacity: 0.7;
            "
          >
            и появляются в вашем личном кабинете на нашем сайте
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 cw">
          <img
            src="@/assets/images/illustrations/Illustration (2).png"
            class="img-fluid"
            alt=""
          /><br />
          <strong>ОТПРАВЛЯЕМ ИХ <br />К ВАМ ДОМОЙ</strong>
          <p
            style="
              font-size: 16px;
              line-height: 25px;
              margin-top: 10px;
              opacity: 0.7;
            "
          >
            в надежной упаковке, по выгодной цене и очень быстро
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 cw">
          <img
            src="@/assets/images/illustrations/Illustration (3).png"
            class="img-fluid"
            alt=""
          /><br />
          <strong
            >ЗАБИРАЕТЕ<br />
            свою ПОСЫЛКУ</strong
          >
          <p
            style="
              font-size: 16px;
              line-height: 25px;
              margin-top: 10px;
              opacity: 0.7;
            "
          >
            в пункте выдачи, на почте или с курьером
          </p>
        </div>
      </div>
      <h2
        class=""
        style="
          font-weight: 300;
          font-size: 20px;
          line-height: 36px;
          opacity: 0.7;
        "
      >
        Не хотите разбираться самостоятельно, наши мастера шопинга с радостью
        <br />купят все товары за вас.
      </h2>
      <!-- <button style="margin-top: 30px;">Быстрая покупка</button> -->
      <btn style="margin-top: 30px" :name="'Быстрая покупка'" />
    </div>
  </div>
</template>

<script>
import btn from "@/components/elements/AppButton.vue"
export default {
  comments:{
    btn
  }
};
</script>

<style>
</style>