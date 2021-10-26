<template>
  <v-container grid-list-xl fluid>
    <div class="text-xs-right">
      <h4>
        Refresh All
        <v-icon @click="refreshAll()">refresh</v-icon>
      </h4>
    </div>
    <div class="text-xs-right">
      <h4>
        Refresh Dashboard
        <v-icon @click="refreshDashboard()">refresh</v-icon>
      </h4>
    </div>
    <v-flex lg8 sm12 xs12>
      <h1></h1>
    </v-flex>
    <v-layout v-if="loading" id="spinner">
      <v-progress-circular indeterminate color="#ba234b"></v-progress-circular>
    </v-layout>

    <v-layout v-else row wrap>
      <div>
        <v-tabs v-model="active" color="#FAFAFA" light slider-color="#1D2939" >
          <template v-for="(project, type) in [awsProjects, azureProjects, gcpProjects]">
            <v-tab ripple> {{projectType[type]}} </v-tab>
            <v-tab-item>
              <v-layout row wrap>
                <v-flex lg3 sm10 v-for="(item, index) in project" :key="'bottom-nav' + index">
                  <dashboard-widget bottom-nav v-bind:item="[item, type]"></dashboard-widget>
                </v-flex>
              </v-layout>
            </v-tab-item>
          </template>
        </v-tabs>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      projectType: ["AWS", "Azure", "GCP"],
      awsProjects: [],
      azureProjects: [],
      gcpProjects: [],
      // endpoint: "https://birdbox.cloudnativelab.tech/",
      endpoint: "http://localhost:28000/",
      loading: false,
      systems: []
    };
  },

  computed: {
    itemsToShow() {
      return this.awsProjects;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  async created() {
    await this.getServers();
  },

  methods: {
    getServers() {
      const vm = this;
      vm.axios.get(vm.$root.endpoint + "api/aws/dashboard").then((response) => {
        var result = response && response.data;
        vm.awsProjects = result;
      });

      //vm.axios.get(vm.$root.endpoint + "api/aws/dashboard").then((response) => {
      vm.axios.get(vm.$root.endpoint + "azure/dashboard").then((response) => {
        var result = response && response.data;
        vm.azureProjects = result;
      });

      vm.axios.get(vm.$root.endpoint + "gcp/dashboard").then((response) => {
        var result = response && response.data;
        vm.gcpProjects = result;
      });
    },
    getSystems() {
      const vm = this;
      vm.axios.get(vm.$root.endpoint + "admin/system").then((response) => {
        var result = response && response.data;
        vm.systems = result;
      });
    }, 
    async refreshDashboard() {
      const vm = this;
      vm.loading = true;
      vm.awsProjects = [];
      await vm.axios
        .get(vm.$root.endpoint + "api/aws/dashboard/refresh")
        .then((response) => {
          var result = response && response.data;
          vm.awsProjects = result;
          vm.loading = false;
        });
    },
    async refreshAll() {
      const vm = this;
      await vm.axios
        .get(vm.$root.endpoint + "api/aws/refresh")
        .then((response) => {
          var result = response && response.data;
          vm.awsProjects = result;
        })
        .then(location.reload());
    },
    next() {
      const active = parseInt(this.active);
      this.active = active < 1 ? active + 1 : 0;
    },    
    openSystemForm() {
      const popupX = window.screen.width / 2 - 450 / 2;
      const popupY = window.screen.height / 2 - 750 / 2;
      window.open(
        "#/system/form",
        "운영 대상 시스템 등록",
        `width=500, height=800, 
      left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
      );
    }  
  },
};
</script>

<style>
#home {
  height: 100%;
  text-align: center;
}

h1 {
  font-size: 40px;
  margin: 10px;
}

#spinner {
  text-align: center;
  padding: 20% 40% 20% 40%;
}

#inspire
  > div.application--wrap
  > div
  > main
  > div
  > div
  > div.layout.row.wrap
  > div {
  width: 100%;
}

.v-tabs__container {
  margin-bottom: 10px;
}

.v-tabs__div {
  font-weight: bolder;
}
</style>
