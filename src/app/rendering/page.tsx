"use client";

import CSR from "@/components/rendering/CSR";
import ISR from "@/components/rendering/ISR";
import SSG from "@/components/rendering/SSG";
import SSR from "@/components/rendering/SSR";
import React, { useState } from "react";

import type { Explanation } from "@/types";

const RenderingPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식</h1>
    </div>
  );
};

export default RenderingPage;
