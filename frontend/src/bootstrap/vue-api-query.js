import axios from 'axios';

import { Model } from 'vue-api-query'

Model.$http = axios;