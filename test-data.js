
// Test server on cloud
export const BASE_PATH = 'https://load-testing.kb.us-east-2.aws.elastic-cloud.com:9243/';

// Spencers off cloud instance
//export const BASE_PATH = 'http://34.136.67.157';


const BUNDLE_ID = '53682';
const DEFAULT_HEADERS = {
    // "accept-encoding": "identity",
    "content-type": "application/json",
    "Connection": "keep-alive",
    "kbn-version": "8.3.3",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
}

const USERNAME = 'benchmark';
const PASSWORD = 'markymark';

export const TEST_FILES = {
    'cdn-file': {
        url: 'https://tools-7.kxcdn.com/js/perf-4ca7c62e7b.js',
        method: 'GET',
    },
    'other-server-js-file': {
        // Mock express server
        url: 'https://node-perf-baseline.kibana.dev/assets/bundle.js',
        method: 'GET',
    },
    'json': {
        url:'/translations/en.json', 
        method: 'GET',
    },
    'css-theme': {
        url: '/ui/legacy_light_theme.css',
        method: 'GET',
    },
    'small-chunk': {
        url: `/${BUNDLE_ID}//bundles/kbn-ui-shared-deps-npm/kbn-ui-shared-deps-npm.chunk.2.js`,
        method: 'GET',
    },
    'data-plugin': {
        url: `/${BUNDLE_ID}/bundles/plugin/data/kibana/data.plugin.js`,
        auth: false,
        method: 'GET',
        params: {},
    },
    'utils-plugin': {
        url: `/${BUNDLE_ID}/bundles/plugin/kibanaUtils/kibana/kibanaUtils.plugin.js`,
        auth: false,
        method: 'GET',
        params: {},
    },
    'shared-dll':{
        url: `/${BUNDLE_ID}/bundles/kbn-ui-shared-deps-npm/kbn-ui-shared-deps-npm.dll.js`,
        method: 'GET',
    },
    'login-state': {
        url: '/internal/security/login_state',
        auth: false,
        method: 'GET',
        params: {},
    },
    login: {
        url: '/internal/security/login',
        auth: false,
        method: 'POST',
        headers: DEFAULT_HEADERS,
        params: {
            providerType: "basic",
            providerName: "cloud-basic",
            currentURL: `${BASE_PATH}/login`,
            params: {
                username: USERNAME,
                password: PASSWORD,
            },
        },
    },
    'simple-search': {
        auth: true,
        method: 'POST',
        url: '/api/console/proxy?path=kibana_sample_data_flights%2F_search&method=GET',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {
            "aggs": {
                "0": {
                    "cardinality": {
                        "field": "Carrier"
                    }
                }
            },
            "size": 0
        }

    },
    'bsearch-ese-500-docs-compressed': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}}]}
    },
    'bsearch-ese-500-docs-uncompressed': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=false',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}}]}
    },
    'bsearch-ese-500-docs-5-in-batch': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"sort":[{"order_date":{"order":"desc","unmapped_type":"boolean"}}],"fields":[{"field":"*","include_unmapped":"true"},{"field":"customer_birth_date","format":"strict_date_optional_time"},{"field":"order_date","format":"strict_date_optional_time"},{"field":"products.created_on","format":"strict_date_optional_time"}],"size":500,"version":true,"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":false,"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T11:25:00.331Z"}}}],"should":[],"must_not":[]}},"highlight":{"pre_tags":["@kibana-highlighted-field@"],"post_tags":["@/kibana-highlighted-field@"],"fields":{"*":{}},"fragment_size":2147483647}},"track_total_hits":false,"preference":1661167474313}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch documents"}}}]}
    }, 
    'bsearch-ese-agg-compressed': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}}]}
    }, 
    'bsearch-ese-agg-uncompressed': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=false',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}}]}
    },
    'bsearch-ese-agg-5-in-batch': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"size":0,"aggs":{"2":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","min_doc_count":1}}},"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-21T21:00:00.000Z","lte":"2022-08-22T14:24:22.398Z"}}}],"should":[],"must_not":[]}}},"track_total_hits":true,"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"discover","url":"/app/discover","type":"application","page":"app","id":"new","description":"fetch chart data and total hits"}}}]}
    },
    'bsearch-ese-agg-5-in-batch-breakdown': {
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661354922566}},"aggs":{"1":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T15:28:42.566Z"}}}],"should":[],"must_not":[]}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661354922566}},"aggs":{"1":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T15:28:42.566Z"}}}],"should":[],"must_not":[]}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661354922566}},"aggs":{"1":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T15:28:42.566Z"}}}],"should":[],"must_not":[]}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661354922566}},"aggs":{"1":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T15:28:42.566Z"}}}],"should":[],"must_not":[]}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"date_histogram":{"field":"order_date","calendar_interval":"1w","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661354922566}},"aggs":{"1":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"script_fields":{},"stored_fields":["*"],"runtime_mappings":{},"_source":{"excludes":[]},"query":{"bool":{"must":[],"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T15:28:42.566Z"}}}],"should":[],"must_not":[]}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}}]}
    },
    'bsearch-ese-agg-5-in-batch-difficult': {        
        auth: true,
        method: 'POST',
        url: '/internal/bsearch?compress=true',
        headers: {
            ...DEFAULT_HEADERS,
            'kbn-xsrf': 'kibana',
        },
        params: {"batch":[{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10},"aggs":{"1":{"date_histogram":{"field":"order_date","calendar_interval":"1d","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661357114188}},"aggs":{"3":{"avg":{"field":"products.base_price"}}}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"query":{"bool":{"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T16:05:14.188Z"}}}],}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10},"aggs":{"1":{"date_histogram":{"field":"order_date","calendar_interval":"1d","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661357114188}},"aggs":{"3":{"avg":{"field":"products.base_price"}}}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"query":{"bool":{"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T16:05:14.188Z"}}}],}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10},"aggs":{"1":{"date_histogram":{"field":"order_date","calendar_interval":"1d","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661357114188}},"aggs":{"3":{"avg":{"field":"products.base_price"}}}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"query":{"bool":{"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T16:05:14.188Z"}}}],}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10},"aggs":{"1":{"date_histogram":{"field":"order_date","calendar_interval":"1d","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661357114188}},"aggs":{"3":{"avg":{"field":"products.base_price"}}}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"query":{"bool":{"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T16:05:14.188Z"}}}],}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}},{"request":{"params":{"index":"kibana_sample_data_ecommerce","wait_for_completion_timeout":"60000ms","body":{"aggs":{"0":{"terms":{"field":"category.keyword","order":{"_count":"desc"},"size":10},"aggs":{"1":{"date_histogram":{"field":"order_date","calendar_interval":"1d","time_zone":"Asia/Jerusalem","extended_bounds":{"min":1629752400000,"max":1661357114188}},"aggs":{"3":{"avg":{"field":"products.base_price"}}}}}}},"size":0,"fields":[{"field":"customer_birth_date","format":"date_time"},{"field":"order_date","format":"date_time"},{"field":"products.created_on","format":"date_time"}],"query":{"bool":{"filter":[{"range":{"order_date":{"format":"strict_date_optional_time","gte":"2021-08-23T21:00:00.000Z","lte":"2022-08-24T16:05:14.188Z"}}}],}}},"preference":1661177434210}},"options":{"strategy":"ese","executionContext":{"name":"lens","url":"/app/lens","type":"application","id":"new","page":"editor"}}}]}
    }
    
}