/*!
 * This file is part of `common` module. 
 * 
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import Vue from "vue";
import { IServiceProvider, ServiceProviderFactory } from "uxmid-core";
import { Message, Notice, Spin, ModalInstance } from "view-design";
import { LoadingBarClass } from "view-design/types/loading-bar";
import iview from "../components/iview";

const components: any = iview;

/**
 * 定义组件的基础功能。
 * @class
 * @version 1.0.0
 */
export class Component extends Vue
{
    /**
     * 获取默认服务容器实例。
     * @protected
     * @property
     * @returns IServiceProvider
     */
    protected get serviceProvier(): IServiceProvider
    {
        return ServiceProviderFactory.instance.default;
    }

    /**
     * 获取一个全局加载条实例。
     * @returns LoadingBar
     */
    protected get $loading(): LoadingBarClass
    {
        return components.LoadingBar;
    }
    
    /**
     * 获取一个全局消息提示框实例。
     * @returns Message
     */
    protected get $message(): Message
    {
        return components.Message;
    }
    
    /**
     * 获取一个全局模态框实例。
     * @returns Modal
     */
    protected get $modal(): ModalInstance
    {
        return components.Modal;
    }
    
    /**
     * 获取一个全局通知提醒实例。
     * @returns Notice
     */
    protected get $notice(): Notice
    {
        return components.Notice;
    }
    
    /**
     * 获取一个全局加载中组件实例。
     * @returns Spin
     */
    protected get $spin(): Spin
    {
        return components.Spin;
    }
}
