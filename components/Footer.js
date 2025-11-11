import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { social } from '../info.config';

function Footer () {
    return(

      <div class=" bg-gray-900 flex flex-col items-center">
          <div class="max-w-2xl mx-auto text-white py-10">
              <div class="text-center items-center">
                  <h3 class="text-3xl mb-3"> Download DexBattle </h3>
                  <p> Make your own story. </p>
                 

              </div>
              <div class="w full gap-5 mt-8 flex flex-col md:flex-row lg:flex-raw md:justify-between items-center text-sm text-gray-400">
                  <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; All rights reserved Dexbattle </p>
              </div>

              
          </div>
      </div>
    )
}

export default Footer



