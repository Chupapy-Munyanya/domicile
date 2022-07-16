<script lang="ts">
    export let img_src: string;
    export let name: string;
    export let builder: string;
    export let descr: string;
    export let idd: number;
</script>

<div
    class="col-md-12 col-lg-12 services-2 p-4 py-5 d-flex ftco-animate fadeInUp ftco-animated"
>
    <div class="py-3 d-flex" id="link{idd}">
            <div class="icon">
                <img src={img_src} alt="жилой комплекс" />
            </div>
            <div class="text">
                <h3>{name}</h3>
                <h2>{builder}</h2>
                <p>{descr}</p>
                <script>
                    document.getElementById("link"+idd).setAttribute('onclick', 'location.href =' + base_url + idd); 
                </script>
            </div>
    </div>
</div>

<style>
  .nostyle {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
        }   
   </style>
