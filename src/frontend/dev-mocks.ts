import type { DeepReadonly, MarkWritable } from "ts-essentials";

import type { InstanceGroup, VersionsByType } from "@/core-types";

const mockApi: typeof pywebview.api = {
  getInstanceGroups: () => Promise.resolve(instanceGroups),
  getVersionsByType: () => Promise.resolve(versionsByType),
  renameGroup: () => Promise.resolve(),
  toggleGroupHidden: () => Promise.resolve(),
  deleteGroup: () => Promise.resolve(),
  renameInstance: () => Promise.resolve(),
  changeVersion: () => Promise.resolve(),
  changeArchitectureChoice: () => Promise.resolve(),
  changeGroup: () => Promise.resolve(),
  copyInstance: () => Promise.resolve(),
};

if (import.meta.env.DEV) {
  (window as MarkWritable<typeof window, "pywebview">).pywebview = { api: mockApi };
}

const versionsByType = {
  release: [
    { displayName: "1.20.7201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7005.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5003.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4001.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3203.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1501.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1001.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8301.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7302.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6301.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6003.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1003.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.202.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3104.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.203.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.4101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.4006.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3402.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3202.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.22101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.22002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21005.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10004.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.4002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2003.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.1002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.6005.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.3002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.2001.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.105.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.9.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.105.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.34.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.28.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.402.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.301.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.23.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.10.101.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.10.7.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.9.15.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.8.102.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.8.24.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.7.100.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.7.13.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.6.100.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.6.14.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.5.300.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.5.201.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.5.14.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.4.200.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.2.1002.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.2.800.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.2.306.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.2.203.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.1.500.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.0.16.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.1601.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.1600.5.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.1510.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.159.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.158.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.157.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.156.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.154.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.150.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.142.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.140.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.132.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.131.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "0.130.0.0", availableArchitectures: ["x64", "x86"] },
  ],
  beta: [
    { displayName: "1.19.34.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.32.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.30.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.28.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.26.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.24.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.20.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3030.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3028.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3026.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2029.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2027.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1028.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1027.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1026.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.1020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.27.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.25.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.24.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.22.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.21.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.20.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.4023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.4021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.4020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.3020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.2023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.2022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.2021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.2020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.1020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.56.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.54.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.52.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.17.50.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.23056.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.23054.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.23052.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.23050.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.22052.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.22051.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.22050.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21060.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21059.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21058.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21057.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21056.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21055.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21054.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21053.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.21050.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20057.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20056.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20055.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.20051.0", availableArchitectures: ["x64"] },
    { displayName: "1.16.10060.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10059.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10057.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10056.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10055.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10054.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10053.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10052.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10051.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.10050.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2054.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2053.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2052.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.2050.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.68.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.60.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.59.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.58.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.57.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.55.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.53.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.16.51.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.15.54.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.15.53.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.15.51.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.3051.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.2501.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.251.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.250.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.103.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.52.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.51.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.4.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.3.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.14.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.15.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.13.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.9.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.6.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.5.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.4.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.13.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.14.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.13.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.12.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.11.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.10.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.9.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.6.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.4.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.3.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.12.2.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.10.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.9.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.8.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.7.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.5.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.4.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.3.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.11.1.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.10.4.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.5.0.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.2.513.0", availableArchitectures: ["x64"] },
    { displayName: "1.2.303.0", availableArchitectures: ["x64", "x86"] },
  ],
  preview: [
    { displayName: "1.20.8023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.8022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.8021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.8020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.7020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6026.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.6020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.5020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.4020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.3020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.2023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.2022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.2021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.2020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.1020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.25.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.24.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.23.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.22.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.21.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.20.20.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.8020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.7020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6027.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6026.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.6020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.5020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.4021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3025.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.3020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.2020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1024.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1022.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.1020.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.35.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.33.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.31.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.29.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.27.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.25.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.19.21.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3031.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3029.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3027.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3023.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.3021.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2030.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2028.0", availableArchitectures: ["x64", "x86"] },
    { displayName: "1.18.2026.0", availableArchitectures: ["x64", "x86"] },
  ],
} as const satisfies VersionsByType;

const instanceGroups: DeepReadonly<InstanceGroup[]> = [
  {
    name: "",
    hidden: false,
    instances: [
      {
        name: "main",
        dirname: "main",
        version: versionsByType.release[41],
        architectureChoice: "x86",
      },
      {
        name: "latest release",
        dirname: "latest_release",
        version: versionsByType.release[0],
        architectureChoice: "x64",
      },
      {
        name: "latest preview",
        dirname: "latest_preview",
        version: versionsByType.preview[0],
        architectureChoice: "x64",
      },
      {
        name: "client testing",
        dirname: "client_testing",
        version: versionsByType.release[41],
        architectureChoice: "x86",
      },
      {
        name: "pack testing",
        dirname: "pack_testing",
        version: versionsByType.preview[41],
        architectureChoice: "x86",
      },
    ],
  },
  {
    name: "sorted",
    hidden: true,
    instances: [
      {
        name: "Application1",
        dirname: "App1Dir",
        version: versionsByType.preview[34],
        architectureChoice: "x64",
      },
      {
        name: "Application2",
        dirname: "App2Dir",
        version: versionsByType.release[1],
        architectureChoice: "x86",
      },
      {
        name: "Application3",
        dirname: "App3Dir",
        version: versionsByType.beta[78],
        architectureChoice: "x64",
      },
      {
        name: "Application4",
        dirname: "App4Dir",
        version: versionsByType.preview[1],
        architectureChoice: "x86",
      },
      {
        name: "Application5",
        dirname: "App5Dir",
        version: versionsByType.release[32],
        architectureChoice: "x64",
      },
    ],
  },
  {
    name: "reversed",
    hidden: false,
    instances: [
      {
        name: "Application6",
        dirname: "App6Dir",
        version: versionsByType.preview[12],
        architectureChoice: "x86",
      },
      {
        name: "Application7",
        dirname: "App7Dir",
        version: versionsByType.release[4],
        architectureChoice: "x64",
      },
      {
        name: "Application8",
        dirname: "App8Dir",
        version: versionsByType.preview[5],
        architectureChoice: "x86",
      },
      {
        name: "Application9",
        dirname: "App9Dir",
        version: versionsByType.beta[2],
        architectureChoice: "x64",
      },
      {
        name: "Application10",
        dirname: "App10Dir",
        version: versionsByType.preview[4],
        architectureChoice: "x86",
      },
    ],
  },
];
