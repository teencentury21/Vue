<template>
    <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><router-link to="/">Home</router-link>
            <li class="list-unstyled"><router-link to="/about">About</router-link></li>            
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="/#"> Inventec MES2 </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>