<script setup>
import { _nc, _cname } from '~~/giaodien/giaodien';
</script>

<template>
    <div :class="_c('profile')">
        <aside :class="_c('block-info')">
            <div :class="_c('title-cate')">Thông tin cá nhân</div>
            <!-- Infomation -->
            <div :class="[_nc('card'), _c('info')]">
                <div :class="[_nc(['row', 'gap-4']), _c('gap-info')]">
                    <div :class="[_nc(['col', 'col-4'])]">
                        <div :class="[_nc('col-container')]">
                            <div :class="[_nc('ratio-3x4')]">
                                <img :class="[_nc('ratio-item'), _c('image-avt')]"
                                    src="https://drive.google.com/uc?id=16feH-IhNgJoIJxKLOAM9mbOP0PWimvim&export=download" />
                            </div>
                        </div>

                    </div>
                    <div :class="[_nc(['col', 'col-8']), _c('information')]">
                        <div :class="[_nc('col-container')]">
                            <div :class="_c('content-block')">
                                <div :class="_c('title')">
                                    Họ và tên:
                                </div>
                                <div :class="_c('name')">
                                    Lưu Trí Sơn
                                </div>
                            </div>

                            <div :class="_c('content-block')">
                                <div :class="_c('title')">Địa chỉ:</div>
                                <div>Đông Tảo, Khoái Châu, Hưng Yên</div>
                            </div>

                            <div :class="_c('content-block')">
                                <div :class="_c('title')">Email:</div>
                                <div>luutrison@gmail.com</div>
                            </div>

                            <div :class="_c('content-block')">
                                <div :class="_c('title')">Số điện thoại:</div>
                                <div>0705869048</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div :class="_c(['tape', 'verified'])">
                    <!-- <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <g></g>
                        <path
                            d="M14.714 6.791c0.504-0.512 0.786-1.181 0.786-1.903 0-1.503-1.223-2.726-2.725-2.726-0.886 0-1.695 0.434-2.207 1.15-0.501-0.155-1.026-0.249-1.568-0.287v-1.025h1v-1h-3v1h1v1.025c-0.542 0.038-1.067 0.132-1.568 0.287-0.512-0.717-1.32-1.15-2.207-1.15-1.502 0-2.725 1.223-2.725 2.726 0 0.723 0.282 1.392 0.786 1.903-0.499 0.962-0.786 2.052-0.786 3.209 0 1.707 0.616 3.271 1.635 4.487l-1.285 1.713 0.8 0.6 1.192-1.59c1.239 1.109 2.868 1.79 4.658 1.79s3.419-0.681 4.658-1.79l1.192 1.59 0.8-0.6-1.285-1.713c1.019-1.216 1.635-2.78 1.635-4.487 0-1.157-0.287-2.247-0.786-3.209zM12.775 3.162c0.951 0 1.725 0.774 1.725 1.726 0 0.373-0.12 0.724-0.335 1.017-0.678-0.936-1.581-1.694-2.63-2.202 0.322-0.339 0.762-0.541 1.24-0.541zM2.5 4.888c0-0.951 0.774-1.726 1.725-1.726 0.478 0 0.918 0.202 1.24 0.54-1.049 0.508-1.951 1.267-2.63 2.202-0.215-0.293-0.335-0.643-0.335-1.016zM8.5 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM9 10h4v1h-5v-4h1v3z">
                        </path>
                    </svg> -->
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z">
                        </path>
                    </svg>
                </div>

            </div>
        </aside>

        <!-- Social Link -->
        <aside :class="_c('block-info')">
            <div :class="_c('title-cate')">Thông tin khác</div>
            <div :class="[_nc(['card']), _c(['info', 'social-info-block'])]">
                <article :class="_c('item-other-info')">
                    <div :class="_c('social-title')">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="5" r="2"></circle>
                            <circle cx="5" cy="19" r="2"></circle>
                            <circle cx="19" cy="19" r="2"></circle>
                            <circle cx="12" cy="14" r="3"></circle>
                            <line x1="12" y1="7" x2="12" y2="11"></line>
                            <line x1="6.7" y1="17.8" x2="9.5" y2="15.8"></line>
                            <line x1="17.3" y1="17.8" x2="14.5" y2="15.8"></line>
                        </svg>
                        Sở thích
                    </div>
                    <div :class="[_c('social-content'), _nc(['row', 'row-col-1'])]">
                        <div :class="[_c(['']), _nc(['col'])]">
                            <ul :class="[_c(['list-favorite']), _nc('')]">
                                <li>
                                    Chơi game
                                </li>
                                <li>
                                    Bơi
                                </li>
                                <li>
                                    Viết code
                                </li>
                                <li>
                                    Đi lang thang
                                </li>
                                <li>
                                    Tập thể hình
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <!-- Social -->


                <article :class="_c('item-other-info')">
                    <div :class="_c('social-title')">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="5" r="2"></circle>
                            <circle cx="5" cy="19" r="2"></circle>
                            <circle cx="19" cy="19" r="2"></circle>
                            <circle cx="12" cy="14" r="3"></circle>
                            <line x1="12" y1="7" x2="12" y2="11"></line>
                            <line x1="6.7" y1="17.8" x2="9.5" y2="15.8"></line>
                            <line x1="17.3" y1="17.8" x2="14.5" y2="15.8"></line>
                        </svg>
                        Tôi cũng dùng
                    </div>
                    <div :class="[_c('social-content'), _nc(['row', 'row-col-5', 'gap-1'])]">
                        <div :class="[_nc(['col']), _c('item-social')]">
                            <div :class="[_nc(['col-container'])]">
                                <div :class="_nc('ratio-1x1')">
                                    <div :class="[_nc(['ratio-item'])]">
                                    <a target="_blank" href="https://fb.com/sondeptrailenhlang" :class="_nc('link')"
                                        style="color: #2374E1">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 16 16" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                            </path>
                                        </svg>
                                        <span :class="_c('name-social-link')">
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                                </div>
                            </div>

                        </div>
                        <div :class="[_nc(['col']), _c('item-social')]">
                            <div :class="[_nc(['col-container'])]">
                                <div :class="_nc('ratio-1x1')">
                                    <div :class="[_nc(['ratio-item'])]">
                                    <a target="_blank" href="https://fb.com/sondeptrailenhlang" :class="_nc('link')"
                                        style="color: #008FF3">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title></title>
                                            <path
                                                d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z">
                                            </path>
                                        </svg>
                                        <span :class="_c('name-social-link')">
                                            Zalo
                                        </span>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div :class="[_nc(['col']), _c('item-social')]">
                            <div :class="[_nc(['col-container'])]">
                                <div :class="_nc('ratio-1x1')">
                                    <div :class="[_nc(['ratio-item'])]">
                                        <a target="_blank" href="https://fb.com/sondeptrailenhlang" :class="_nc('link')"
                                            style="color: #f00">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 16 16" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z">
                                                </path>
                                            </svg>
                                            <span :class="_c('name-social-link')">
                                                Youtube
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </aside>


    </div>
</template>

<script>

export default {
    data() {
        return {
            _c: _cname(this.$style)
        }
    }
}


</script>

<style lang="scss" module>
@import "./profile.scss";
</style>