const navItems = {
    /**
     * 기본 format
     * {
     *  _id: 고유 element id
     *  icon : icon string or 값 없을 경우 ''
     *  route: route 하게 될 uri string or 값 없을 경우 ''
     *  redirect: redirect 하게 될 uri string or 값 없을 경우 null
     *  child: 하위 자식 element 구성 or 값 없을 경우 []
     * }
     */
    home: {
        _id: 1,
        title: 'Home',
        icon: 'home',
        route: 'Home',
        redirect: null,
        child: []
    },
    dashboard: {
        _id: null,
        title: 'Dashboard',
        icon: 'fas fa-chart-area',
        route: '',
        redirect: null,
        child: [
            {
                _id: 50,
                icon: 'star',
                title: 'Computing Resource Count',
                route: 'ResourceDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 51,
                icon: 'star',
                title: 'Risky Security Group Dashboard',
                route: 'SecurityGroupDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 52,
                icon: 'star',
                title: 'Unused Credential Dashboard',
                route: 'UnusedCredentialDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 53,
                icon: 'star',
                title: 'Unused Elastic IP Dashboard',
                route: 'UnusedElasticIPDashBoard',
                redirect: null,
                child: []
            },
            {
                _id: 54,
                icon: 'star',
                title: 'AWS Config Status',
                route: 'AwsConfigStatusDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 55,
                icon: 'star',
                title: 'AWS Quota Dashboard',
                route: 'AwsQuotaDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 56,
                icon: 'star',
                title: 'WAS Config Check Dashboard',
                route: 'WasConfigCheckDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 61,
                icon: 'star',
                title: 'DB CMS Config Check Dashboard',
                route: 'DBCmsConfigCheckDashboard',
                redirect: null,
                child: []
            },
            {
                _id: 62,
                icon: 'star',
                title: 'DB Parameter Check Dashboard',
                route: 'DBParameterCheckDashboard',
                redirect: null,
                child: []
            },
        ]
    },
    customService: {
        _id: 60,
        icon: 'star',
        title: 'Customer Service',
        route: 'SystemDashboard',
        redirect: null,
        child: []
    },
    backupStatus: {
        _id: null,
        icon: 'fas fa-history',
        title: 'Backup Status',
        route: '',
        redirect: null,
        child: [
            {
                _id: 73,
                icon: 'star',
                title: 'Daily Backup Summary',
                route: 'DailyBackupSummeryDashBoard',
                redirect: null,
                child: []
            },
            {
                _id: 70,
                icon: 'star',
                title: 'AWS Backup Status',
                route: 'AwsBackupStatusDashBoard',
                redirect: null,
                child: []
            },
            {
                _id: 71,
                icon: 'star',
                title: 'GCP Backup Status',
                route: 'GcpBackupStatusDashBoard',
                redirect: null,
                child: []
            },
            {
                _id: 72,
                icon: 'star',
                title: 'Azure Backup Status',
                route: 'AzureBackupStatusDashBoard',
                redirect: null,
                child: []
            },
        ]
    },
    encloud: {
        _id: 2,
        icon: 'cloud',
        title: 'Encloud',
        route: 'Encloud',
        redirect: null,
        child: []
    },
    aws: {
        // id 신규 할당 as-is: null, to-be: 100
        _id: 100,
        icon: 'fab fa-aws',
        title: 'AWS',
        route: '',
        redirect: null,
        child: [
            {
                _id: 3,
                icon: 'computer',
                title: 'Compute',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 3,
                        icon: '',
                        title: 'EC2',
                        route: 'Aws',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 5,
                        icon: '',
                        title: 'AMI',
                        route: 'AwsAmi',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 6,
                        icon: '',
                        title: 'Lambda',
                        route: 'AwsLambda',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 31,
                        icon: '',
                        title: 'Batch',
                        route: 'AwsBatch',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 7,
                icon: 'fas fa-wifi',
                title: 'Network',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 7,
                        icon: '',
                        title: 'VPC',
                        route: 'AwsVpc',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 8,
                        icon: '',
                        title: 'Subnet',
                        route: 'AwsSubnet',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 9,
                        icon: '',
                        title: 'Security Group',
                        route: 'AwsSecurityGroup',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 10,
                        icon: '',
                        title: 'Load Balancer',
                        route: 'AwsLoadBalancer',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 29,
                        icon: '',
                        title: 'Route 53',
                        route: 'AwsRoute53',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 30,
                        icon: '',
                        title: 'API Gateway',
                        route: 'AwsApiGateway',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 33,
                icon: 'fas fa-shield-alt',
                title: 'Security',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 33,
                        icon: '',
                        title: 'Certificate Manager',
                        route: 'AwsAcm',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 36,
                        icon: '',
                        title: 'IAM',
                        route: 'AwsSubnet',
                        redirect: null,
                        child: [
                            {
                                _id: 34,
                                icon: '',
                                title: 'Group',
                                route: 'AwsIamGroup',
                                redirect: null,
                                child: []
                            },
                            {
                                _id: 35,
                                icon: '',
                                title: 'User',
                                route: 'AwsIamUser',
                                redirect: null,
                                child: []
                            },
                            {
                                _id: 41,
                                icon: '',
                                title: 'Role',
                                route: 'AwsIamRole',
                                redirect: null,
                                child: []
                            },
                        ]
                    },
                ]
            },
            {
                _id: 11,
                icon: 'fas fa-database',
                title: 'Database',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 11,
                        icon: '',
                        title: 'RDS',
                        route: 'AwsRds',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 12,
                        icon: '',
                        title: 'ElastiCache',
                        route: 'AwsCache',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 13,
                icon: 'directions_boat',
                title: 'Container',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 13,
                        icon: '',
                        title: 'ECS',
                        route: 'AwsEcs',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 14,
                        icon: '',
                        title: 'EKS',
                        route: 'AwsEks',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 15,
                        icon: '',
                        title: 'ECR',
                        route: 'AwsEcr',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 16,
                icon: 'fas fa-tools',
                title: 'Dev Tools',
                route: '',
                redirect: null,
                child: [
                    // {
                    //     _id: 16,
                    //     icon: '',
                    //     title: 'CodeCommit',
                    //     route: 'AwsCodes',
                    //     redirect: null,
                    //     child: []
                    // },
                    {
                        _id: 17,
                        icon: '',
                        title: 'CodeBuild',
                        route: 'AwsCodeBuild',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 18,
                        icon: '',
                        title: 'CodeDeploy',
                        route: 'AwsCodeDeploy',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 29,
                        icon: '',
                        title: 'StepFunctions',
                        route: 'AwsStepFunctions',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 37,
                icon: 'fas fa-clone',
                title: 'Backup',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 38,
                        icon: '',
                        title: 'Recovery Point',
                        route: 'AwsBackupRecoveryPoint',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 39,
                        icon: '',
                        title: 'Vault',
                        route: 'AwsBackupVault',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 40,
                        icon: '',
                        title: 'Plan',
                        route: 'AwsBackupPlan',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                // id 중복 as-is: 37, to-be: 101
                _id: 101,
                icon: 'fab fa-bitbucket',
                title: 'Storage',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 4,
                        icon: '',
                        title: 'EBS',
                        route: 'AwsEbs',
                        redirect: null,
                        child: []
                    },
                    {
                        // id 중복 as-is: 38, to-be: 101
                        _id: 102,
                        icon: '',
                        title: 'S3',
                        route: 'AwsS3',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 36,
                icon: 'fas fa-calculator',
                title: '비용 계산기',
                route: '',
                redirect: 'https://calculator.aws/#/addService',
                child: []
            }
        ]
    },
    gcp: {
        // id 신규 할당 as-is: null, to-be: 103
        _id: 103,
        icon: 'fab fa-google',
        title: 'Google Cloud',
        route: '',
        redirect: null,
        child: [
            {
                _id: 19,
                icon: 'computer',
                title: 'Compute',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 19,
                        icon: '',
                        title: 'Compute Engine',
                        route: 'GoogleComputeEngine',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 20,
                        icon: '',
                        title: 'App Engine',
                        route: 'GoogleAppEngine',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 21,
                        icon: '',
                        title: 'Function',
                        route: 'GoogleCloudFunctions',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 35,
                icon: 'fas fa-wifi',
                title: 'Network',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 36,
                        icon: '',
                        title: 'Subnetwork',
                        route: 'GoogleSubnetwork',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 35,
                        icon: '',
                        title: 'Firewall',
                        route: 'GoogleFirewall',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 42,
                        icon: '',
                        title: 'VPC networks',
                        route: 'GoogleVpcNetworks',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 45,
                icon: 'fas fa-cloud-upload-alt',
                title: 'BigData',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 45,
                        icon: '',
                        title: 'Pub/Sub',
                        route: 'GooglePubSub',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 22,
                icon: 'fas fa-database',
                title: 'Database',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 22,
                        icon: '',
                        title: 'Cloud Storage',
                        route: 'GoogleCloudStorage',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 23,
                        icon: '',
                        title: 'Bigtable',
                        route: 'GoogleBigtable',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 24,
                        icon: '',
                        title: 'BigQuery',
                        route: 'GoogleBigQuery',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 25,
                        icon: '',
                        title: 'Cloud SQL',
                        route: 'GoogleCloudSql',
                        redirect: null,
                        child: []
                    },
                    {
                        _id: 26,
                        icon: '',
                        title: 'Memorystore',
                        route: 'GoogleMemorystore',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                // id 중복 변경 as-is: 19, to-be: 104
                _id: 104,
                icon: 'directions_boat',
                title: 'Container',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 43,
                        icon: '',
                        title: 'Kubernetes Engine',
                        route: 'GoogleKubernetesEngine',
                        redirect: null,
                        child: []
                    },
                    // {
                    //     _id: 52,
                    //     icon: '',
                    //     title: 'Node Pools',
                    //     route: 'GoogleKubernetesEngineNodePool',
                    //     redirect: null,
                    //     child: []
                    // },
                ]
            },
            {
                _id: 32,
                icon: 'fas fa-file-invoice-dollar',
                title: 'Billing',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 32,
                        icon: '',
                        title: '표준 빌링 태그 확인',
                        route: 'GoogleBilling',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 36,
                icon: 'fas fa-calculator',
                title: '비용 계산기',
                route: '',
                redirect: 'https://cloud.google.com/products/calculator?hl=ko',
                child: []
            }
        ]
    },
    azure: {
        // id 신규 할당 as-is: null, to-be: 105
        _id: 105,
        icon: 'fab fa-microsoft',
        title: 'Azure',
        route: '',
        redirect: null,
        child: [
            {
                _id: 30,
                icon: 'computer',
                title: 'Compute',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 30,
                        icon: '',
                        title: 'Virtual Machines',
                        route: 'AzureVirtualMachines',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                // id 중복 변경 as-is: 30, to-be: 105
                _id: 105,
                icon: 'fas fa-clone',
                title: 'Backup',
                route: '',
                redirect: null,
                child: [
                    {
                        _id: 105,
                        icon: '',
                        title: 'backup',
                        route: 'AzureBackups',
                        redirect: null,
                        child: []
                    },
                ]
            },
            {
                _id: 35,
                icon: 'fas fa-calculator',
                title: '비용 계산기',
                route: '',
                redirect: 'https://azure.microsoft.com/ko-kr/pricing/calculator/',
                child: []
            }
        ]
    },
    terraformPotal: {
        _id: 24,
        icon: 'terrain',
        title: 'Terraform Portal',
        route: 'TerraPortal',
        redirect: null,
        child: []
    },
    costCalculator: {
        _id: 126,
        icon: 'fas fa-calculator',
        title: 'Cost Calculator',
        route: 'CostCalculator',
        redirect: null,
        child: []
    },
    earlyBird: {
        _id: 28,
        icon: 'event_available',
        title: 'Earlybird',
        route: 'MorningChecklist',
        redirect: null,
        child: []
    },
    paperBird: {
        _id: 29,
        icon: 'fas fa-file-contract',
        title: 'Paperbird',
        route: '',
        redirect: 'https://paperbird.opsinno.cloud/#/dashboard',
        child: []
    },
    systemAdministrator: {
        _id: 27,
        icon: 'perm_contact_calendar',
        title: 'System Administrator',
        route: '',
        redirect: null,
        child: []
    },
    users: {
        // id 신규 할당 as-is: null, to-be: 106
        _id: 106,
        icon: 'fas fa-user-circle',
        title: 'Users',
        route: '',
        redirect: null,
        child: [
            {
                // id 신규 할당 as-is: null, to-be: 107
                _id: 107,
                icon: 'people_outline',
                title: 'Management',
                route: '',
                redirect: null,
                child: []
            },
            {
                // id 신규 할당 as-is: null, to-be: 108
                _id: 108,
                icon: 'settings',
                title: 'Settings',
                route: '',
                redirect: null,
                child: []
            },
        ]
    },
};

export default navItems;
