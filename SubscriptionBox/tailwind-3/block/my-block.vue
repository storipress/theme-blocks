<template>
  <Block id="subscribe" :block="block" class="md:px-22 py-16 md:py-28" backgroundColor="f6f6f6">
    <SubscribeForm class="subscribe-form">
      <template v-slot="{ result, message, clear }">
        <div kind="form-area" class="flex flex-col items-center justify-center">
          <div class="form-content-area flex flex-col items-start md:items-center">
            <TextInput
              kind="form-title"
              component="h3"
              :fontSize="{ xs: 30, md: 36 }"
              fontFamily="Jost"
              :lineHeight="1.3"
              bold
              color="000"
              :defaultValue="'Want more?'"
            />
            <TextInput
              class="mt-2 md:max-w-screen-sm"
              kind="form-description"
              component="p"
              :fontSize="{ xs: 16, md: 18 }"
              fontFamily="Jost"
              :lineHeight="1.5"
              :align="{ xs: 'left', md: 'center' }"
              color="000"
              :defaultValue="'Sign up to our newsletter.'"
            />
          </div>
          <div class="form-input-area relative mt-8 w-full sm:w-max">
            <label for="form-input-email" class="sr-only"> Email address </label>
            <SubscribeEmail
              id="form-input-email"
              class="mt-3 w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-500 md:w-80"
              placeholder="Enter your email"
            />
            <button class="mt-3 inline-block w-full overflow-hidden shadow-sm md:ml-4 md:w-max" type="submit">
              <ColorArea
                backgroundColor="6366f1"
                kind="form-btn-submit"
                class="px-5 py-3 duration-100 ease-in-out hover:opacity-75 md:px-10"
              >
                <TextInput
                  kind="form-btn-submit-text"
                  component="span"
                  :fontSize="16"
                  fontFamily="Jost"
                  color="fff"
                  :defaultValue="'Subscribe'"
                />
              </ColorArea>
            </button>
            <div
              v-show="message"
              class="absolute mt-4 w-full rounded-md p-4"
              :class="result === 'error' ? 'bg-red-50' : 'bg-green-50'"
            >
              <div class="flex">
                <div class="shrink-0" :class="result === 'error' ? 'text-red-50' : 'text-green-50'">
                  <template v-if="result === 'error'">
                    <!-- Heroicon name: solid/x-circle -->
                    <svg
                      class="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </template>
                  <template v-else>
                    <!-- Heroicon name: solid/check-circle -->
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </template>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium" :class="result === 'error' ? 'text-red-800' : 'text-green-800'">
                    {{ result === 'error' ? 'Error' : 'Success' }}
                  </h3>
                  <div class="mt-2 text-sm" :class="result === 'error' ? 'text-red-700' : 'text-green-700'">
                    <p class="subscribe-result-msg" v-html="message" />
                  </div>
                </div>
                <div v-if="clear" class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      :class="
                        result === 'error'
                          ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50'
                          : 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50'
                      "
                      class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      @click="clear"
                    >
                      <span class="sr-only">Dismiss</span>
                      <i class="icon-cross_thin text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SubscribeForm>
  </Block>
</template>

<script>
import { Block, SubscribeEmail, SubscribeForm, ColorArea, TextInput } from '@storipress/block'

export default {
  components: {
    Block,
    SubscribeEmail,
    SubscribeForm,
    ColorArea,
    TextInput,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.subscribe-result-msg > a {
  @apply underline;
}
</style>
