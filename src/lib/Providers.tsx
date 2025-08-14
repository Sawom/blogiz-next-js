"use client";

import { store } from "@/redux/api/baseApi";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

// here store={store} I created. { children: React.ReactNode } I get from layout.tsx
// Provider from redux