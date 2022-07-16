<script lang="ts">
    export let img_src: string;
    export let name: string;
    export let builder: string;
    export let descr: string;
</script>
<div class="col-md-12 col-lg-4 services-2 p-4 py-5 d-flex ftco-animate fadeInUp ftco-animated">
    <div class="py-3 d-flex">
        <div class="icon">
            <img src={img_src} alt="жилой комплекс">
        </div>
        <div class="text">
          <h3>{name}</h3>
          <h2>{builder}</h2>
          <p>{descr}</p>
        </div>
    </div>
</div>



