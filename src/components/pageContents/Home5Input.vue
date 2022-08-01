<template>
  <div>
    <div class="container" style="margin-bottom: 100px">
      <h1>
        OkeyPost удобная и быстрая доставка<br />
        посылок из Великобритании
      </h1>
      <p>
        Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши<br />
        посылки на складе, при необходимости объединим несколько доставок в
        одну<br />
        и отправим их к вам надежно упакованными.
      </p>
      <div class="qator5">
        <div class="secn1">
          <p style="float: left">Страна:</p>
          <label>
            <i style="position: absolute; margin: 15px 20px 20px 10px"
              ><img src="@/assets/images/shar.png"
            /></i>
            <select>
              <option value="Россия">Россия</option>
              <option value="Россия">Россия</option>
              <option value="Россия">Россия</option>
            </select>
          </label>
        </div>
        <div class="input1">
          <p style="float: left">Город:</p>
          <label>
            <i style="position: absolute; margin: 15px 20px 20px 10px"
              ><img src="@/assets/images/domik.png"
            /></i>
            <input type="text" placeholder="Москва" />
          </label>
        </div>
        <div class="input1">
          <p style="float: left">Индекс:</p>
          <label>
            <i style="position: absolute; margin: 15px 20px 20px 10px"
              ><img src="@/assets/images/Notebook.png"
            /></i>
            <input type="text" placeholder="Введите индекс" />
          </label>
        </div>
        <div class="input1">
          <p style="float: left">Вес посылки:</p>
          <label>
            <i style="position: absolute; margin: 15px 20px 20px 10px"
              ><img src="@/assets/images/Barbell.png"
            /></i>
            <input type="text" placeholder="0,5" />
          </label>
        </div>
        <div class="secn2" style="margin: 0 !important">
          <p style="float: left">Дополнительные услуги:s</p>
          <label>
            <i style="position: absolute; margin: 15px 20px 20px 10px"
              ><img
                src="@/assets/images/FileText.png"
                style="text-align: left; display: inline-block"
            /></i>
            <select>
              <option value="Выберите услуги">Выберите услуги</option>
              <option value="Выберите услуги">Выберите услуги</option>
              <option value="Выберите услуги">Выберите услуги</option>
            </select>
          </label>
        </div>
        <br /><br />
        <btn
          style="
            float: left;
            margin-top: 40px;
            position: relative;
            margin-bottom: 51px;
          "
          :name="'Рассчитать'"
        />
        <!-- <button style="float: left;margin-top: 40px;position: relative;margin-bottom: 51px;">Рассчитать</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/elements/AppButton.vue"
export default {
    components:{
        btn
    }
};
</script>

<style>
</style>