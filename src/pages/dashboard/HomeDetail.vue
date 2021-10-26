<template>
  <v-container fill-height="fill-height">
    <v-layout>
      <v-container v-if="loading">
        <v-card id="spinner">
          <v-progress-circular indeterminate color="#ba234b"></v-progress-circular>
        </v-card>
      </v-container>
      <v-container v-else>
        <div>
          <v-container fluid grid-list-xl>
            <v-layout row wrap>
              <v-flex xs6>
                <h1>{{ accountName }}</h1>
              </v-flex>
              <v-flex xs6 id="container-btn-back">
                <v-btn color="rgb(72, 108, 145)" dark large v-on:click="routeHome" id="btn-back">
                  돌아가기
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <aws-dashboard-detail-widget v-bind:dashboard="dashboard" v-if="type == 'aws'" />
          <gcp-dashboard-detail-widget v-bind:dashboard="dashboard" v-if="type == 'gcp'" />
          <azure-dashboard-detail-widget v-bind:dashboard="dashboard" v-if="type == 'azure'" />
          <v-container fluid grid-list-xl v-if="type == 'aws'">
            <v-layout row wrap>
              <v-flex xs12 id="container-btn-back">
                <v-btn color="rgb(72, 108, 145)" dark large v-on:click="reouteTopology" id="btn-back">
                  Topology >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fluid grid-list-xl v-if="type == 'gcp'">
            <v-layout row wrap>
              <v-flex xs12 id="container-btn-back">
                <v-btn color="rgb(72, 108, 145)" dark large v-on:click="reouteGcpTopology" id="btn-back">
                  Topology >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {

  created() {
    this.type = this.$router.history.current.params.type;
    this.accountName = this.$router.history.current.params.id;
    if (this.type == "aws") {
      this.getAwsDashboardData(this.accountName);
    } else if (this.type == "gcp") {
      this.getGcpDashboardData(this.accountName);
    } else if (this.type == "azure") {
      this.getAzureDashboardData(this.accountName);
    } else if (this.type == "system") {
      this.getSystemData(this.accountName);
    }
  },

  data: () => ({
    loading: false,
    endpoint: "https://birdbox.cloudnativelab.tech/",
    // endpoint: "http://localhost:28000/",
    dashboard: null
  }),

  methods: {
    routeHome() {
      this.$router.push("../../");
    },
    reouteTopology() {
      this.$router.push("/topology/" + this.dashboard.accountNum);
    },
    reouteGcpTopology() {
      this.$router.push("/gcp/topology/" + this.dashboard.accountName);
      console.log("====== test1 ======");
    },
    getSystemData(accountName) {
      const _this = this;
      _this.loading = true;
      _this.axios.get(_this.$root.endpoint + "admin/system/" + accountName)
        .then((response) => {
          let result = response && response.data;
          _this.dashboard = result[0];
          _this.loading = false;
        });
    },
    getAwsDashboardData(accountName) {
      const _this = this;
      _this.loading = true;
      _this.axios.get(_this.$root.endpoint + "api/aws/dashboard/" + accountName)
        .then((response) => {
          _this.dashboard = response && response.data;
          _this.loading = false;
        });
    },
    getGcpDashboardData(accountName) {
      const _this = this;
      _this.loading = true;
      _this.axios.get(_this.$root.endpoint + "gcp/dashboard/" + accountName)
        .then((response) => {
          _this.dashboard = response && response.data;
          _this.loading = false;
        });
    },
    getAzureDashboardData(subscriptionName) {
      const _this = this;
      _this.loading = true;
      _this.axios.get(_this.$root.endpoint + "azure/dashboard/" + subscriptionName)
        .then((response) => {
          _this.dashboard = response && response.data;
          _this.loading = false;
        });
    }
  },
};

</script>

<style>
#container-btn-back {
  margin: auto;
  text-align: end;
}

.v-expansion-panel__header {
  padding: 12px;
}

.v-expansion-panel__container {
  box-shadow: none;
  margin-bottom: 10px;
  border: solid #f3f3f3 thin;
  -webkit-box-shadow: none;
}

ul.v-expansion-panel.theme--light {
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>