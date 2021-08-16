<template>
  <div class="container">
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                :src="coin.image.large"
                alt="Admin"
                class="rounded-circle"
                width="150"
              />
              <div class="mt-3">
                <h4 class="text-capitalize">{{ coin.id }}</h4>
                <p class="text-secondary mb-1"><span class="fw-bold"> Simbolo :</span> {{ coin.symbol }}</p>
                <p class="text-muted font-size-sm">
                  <span class="fw-bold"> Precio USD :</span>{{ coin.market_data.current_price.usd }}
                </p>
                <v-btn color="primary" :href="coin.links.homepage[0]">
                Pagina
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <ul class="list-group list-group-flush">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-globe mr-2 icon-inline"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path></svg
                >Website
              </h6>
              <span class="text-secondary">{{ coin.links.homepage[0] }}</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github mr-2 icon-inline"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path></svg
                >Github
              </h6>
              <span class="text-secondary">{{ coin.links.repos_url.github[0] }}</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter mr-2 icon-inline text-info"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path></svg
                >Twitter
              </h6>
              <span class="text-secondary">@{{ coin.links.twitter_screen_name }} </span>
            </li>
           
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h6 class="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook mr-2 icon-inline text-primary"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path></svg
                >Facebook
              </h6>
              <span class="text-secondary">{{ coin.links.facebook_username }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Ranking Gecko</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ coin.coingecko_rank }}°</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Categoria</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ coin.categories[0] }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Fecha de Creación</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ coin.genesis_date }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Cambio</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ coin.market_data.price_change_percentage_24h }}%</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Ultima Actualización</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ coin.market_data.last_updated }}
              </div>
            </div>
            <hr />
          </div>
        </div>

<!--
        <div class="row gutters-sm">
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="d-flex align-items-center mb-3">
                  <i class="material-icons text-info mr-2">assignment</i>Project
                  Status
                </h6>
                <small>Web Design</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Website Markup</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 72%"
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>One Page</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 89%"
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Mobile Template</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 55%"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Backend API</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 66%"
                    aria-valuenow="66"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="d-flex align-items-center mb-3">
                  <i class="material-icons text-info mr-2">assignment</i>Project
                  Status
                </h6>
                <small>Web Design</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Website Markup</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 72%"
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>One Page</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 89%"
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Mobile Template</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 55%"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Backend API</small>
                <div class="progress mb-3" style="height: 5px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 66%"
                    aria-valuenow="66"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coin",

  data: () => ({
    coinId: "",
    coin: {},
  }),

  created: function () {
    this.coinId = this.$route.params.id;
  },
  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        this.coinId +
        "?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
    );
    const data = await res.json();
    this.coin = data;
  },
};
</script>

<style>
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>