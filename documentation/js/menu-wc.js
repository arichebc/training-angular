'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-nov-bis documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-07b93df33254a28587151a226d8cf10dfb2828112677d190ab126cd97c31b0065bc1248f975f49a539c09f235c502c2bbc22c2c699ce5b576c0a26658c010ae7"' : 'data-target="#xs-components-links-module-AppModule-07b93df33254a28587151a226d8cf10dfb2828112677d190ab126cd97c31b0065bc1248f975f49a539c09f235c502c2bbc22c2c699ce5b576c0a26658c010ae7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-07b93df33254a28587151a226d8cf10dfb2828112677d190ab126cd97c31b0065bc1248f975f49a539c09f235c502c2bbc22c2c699ce5b576c0a26658c010ae7"' :
                                            'id="xs-components-links-module-AppModule-07b93df33254a28587151a226d8cf10dfb2828112677d190ab126cd97c31b0065bc1248f975f49a539c09f235c502c2bbc22c2c699ce5b576c0a26658c010ae7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-779750520b3cdfa4e8175cee2032f8403057de725252665538dca7a2bfbd96a1b97cad9bebf5cabd620d94a3f3160bfe37f9d1d1f5b00197fe4dd5215d41c80d"' : 'data-target="#xs-components-links-module-ClientsModule-779750520b3cdfa4e8175cee2032f8403057de725252665538dca7a2bfbd96a1b97cad9bebf5cabd620d94a3f3160bfe37f9d1d1f5b00197fe4dd5215d41c80d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-779750520b3cdfa4e8175cee2032f8403057de725252665538dca7a2bfbd96a1b97cad9bebf5cabd620d94a3f3160bfe37f9d1d1f5b00197fe4dd5215d41c80d"' :
                                            'id="xs-components-links-module-ClientsModule-779750520b3cdfa4e8175cee2032f8403057de725252665538dca7a2bfbd96a1b97cad9bebf5cabd620d94a3f3160bfe37f9d1d1f5b00197fe4dd5215d41c80d"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-5f3ce334143b3f9aa3c5b16a62cde30e69adac71ea8e1d84a2a16e998ac119f186f83b8165a7bcb4bdf33594c4e6dce5afc769071960c4873bb8d9deeb3a6d6a"' : 'data-target="#xs-components-links-module-CoreModule-5f3ce334143b3f9aa3c5b16a62cde30e69adac71ea8e1d84a2a16e998ac119f186f83b8165a7bcb4bdf33594c4e6dce5afc769071960c4873bb8d9deeb3a6d6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-5f3ce334143b3f9aa3c5b16a62cde30e69adac71ea8e1d84a2a16e998ac119f186f83b8165a7bcb4bdf33594c4e6dce5afc769071960c4873bb8d9deeb3a6d6a"' :
                                            'id="xs-components-links-module-CoreModule-5f3ce334143b3f9aa3c5b16a62cde30e69adac71ea8e1d84a2a16e998ac119f186f83b8165a7bcb4bdf33594c4e6dce5afc769071960c4873bb8d9deeb3a6d6a"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-45738a5678426bb266d7e9d9a825dcf65293b1599f245d0f09bf6a0367c644b77cff0742f6afa91c7cc2d8190442bc90bbae0ff59a1eda302e095047b58207f9"' : 'data-target="#xs-components-links-module-IconsModule-45738a5678426bb266d7e9d9a825dcf65293b1599f245d0f09bf6a0367c644b77cff0742f6afa91c7cc2d8190442bc90bbae0ff59a1eda302e095047b58207f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-45738a5678426bb266d7e9d9a825dcf65293b1599f245d0f09bf6a0367c644b77cff0742f6afa91c7cc2d8190442bc90bbae0ff59a1eda302e095047b58207f9"' :
                                            'id="xs-components-links-module-IconsModule-45738a5678426bb266d7e9d9a825dcf65293b1599f245d0f09bf6a0367c644b77cff0742f6afa91c7cc2d8190442bc90bbae0ff59a1eda302e095047b58207f9"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-03d6f2fb7fc3f1b4d0f085d3f9e04109648ed43427f50440954b28845121f9e6f94125f574fbf4b50f91e28336e15ad7b005116c4e1a8ea6d318beab800e3a83"' : 'data-target="#xs-components-links-module-LoginModule-03d6f2fb7fc3f1b4d0f085d3f9e04109648ed43427f50440954b28845121f9e6f94125f574fbf4b50f91e28336e15ad7b005116c4e1a8ea6d318beab800e3a83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-03d6f2fb7fc3f1b4d0f085d3f9e04109648ed43427f50440954b28845121f9e6f94125f574fbf4b50f91e28336e15ad7b005116c4e1a8ea6d318beab800e3a83"' :
                                            'id="xs-components-links-module-LoginModule-03d6f2fb7fc3f1b4d0f085d3f9e04109648ed43427f50440954b28845121f9e6f94125f574fbf4b50f91e28336e15ad7b005116c4e1a8ea6d318beab800e3a83"' }>
                                            <li class="link">
                                                <a href="components/PageForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-64e3f69cfc1a05709c3913074ed14071596028a90635046271eddb4cb5c58b00e8d7876eada7a25655cfd3d2296ef8c3162b90b62adcd009c6969f8927a8a6f7"' : 'data-target="#xs-components-links-module-OrdersModule-64e3f69cfc1a05709c3913074ed14071596028a90635046271eddb4cb5c58b00e8d7876eada7a25655cfd3d2296ef8c3162b90b62adcd009c6969f8927a8a6f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-64e3f69cfc1a05709c3913074ed14071596028a90635046271eddb4cb5c58b00e8d7876eada7a25655cfd3d2296ef8c3162b90b62adcd009c6969f8927a8a6f7"' :
                                            'id="xs-components-links-module-OrdersModule-64e3f69cfc1a05709c3913074ed14071596028a90635046271eddb4cb5c58b00e8d7876eada7a25655cfd3d2296ef8c3162b90b62adcd009c6969f8927a8a6f7"' }>
                                            <li class="link">
                                                <a href="components/FormOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' : 'data-target="#xs-components-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' :
                                            'id="xs-components-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                            <li class="link">
                                                <a href="components/BtnActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BtnRouteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnRouteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' : 'data-target="#xs-directives-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' :
                                        'id="xs-directives-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' : 'data-target="#xs-pipes-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' :
                                            'id="xs-pipes-links-module-SharedModule-b672f9ee96c68d47e025bea61836e459ec1b3840dc772e3e4abe9f5dbb66f75f96573ada0cce92b61cb604f0baede3aa89aaaa1af710f652e39a0461cf83cf60"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-4662ce09deaa0ac3e71f133f69de3a559354ef499e1c8ac925a43d957fb19a5d0caaf853af149b804e6e86b402b207164b33218e4279d82d9ca9a17e4b789a0c"' : 'data-target="#xs-components-links-module-UiModule-4662ce09deaa0ac3e71f133f69de3a559354ef499e1c8ac925a43d957fb19a5d0caaf853af149b804e6e86b402b207164b33218e4279d82d9ca9a17e4b789a0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-4662ce09deaa0ac3e71f133f69de3a559354ef499e1c8ac925a43d957fb19a5d0caaf853af149b804e6e86b402b207164b33218e4279d82d9ca9a17e4b789a0c"' :
                                            'id="xs-components-links-module-UiModule-4662ce09deaa0ac3e71f133f69de3a559354ef499e1c8ac925a43d957fb19a5d0caaf853af149b804e6e86b402b207164b33218e4279d82d9ca9a17e4b789a0c"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorHandler.html" data-type="entity-link" >ErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VersionService.html" data-type="entity-link" >VersionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientI.html" data-type="entity-link" >ClientI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});